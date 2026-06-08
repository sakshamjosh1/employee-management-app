from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

from database import engine, get_db
from models import Base, Employee
from schemas import EmployeeCreate, EmployeeResponse

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Employee API Running"}


@app.post("/employees", response_model=EmployeeResponse)
def create_employee(employee: EmployeeCreate, db: Session = Depends(get_db)):

    existing_employee = db.query(Employee).filter(
        Employee.email == employee.email
    ).first()

    if existing_employee:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    new_employee = Employee(
        name=employee.name,
        email=employee.email,
        department=employee.department,
        salary=employee.salary
    )

    db.add(new_employee)
    db.commit()
    db.refresh(new_employee)

    return new_employee


@app.get("/employees", response_model=list[EmployeeResponse])
def get_employees(db: Session = Depends(get_db)):
    return db.query(Employee).all()


@app.delete("/employees/{employee_id}")
def delete_employee(employee_id: int,
                    db: Session = Depends(get_db)):

    employee = db.query(Employee).filter(
        Employee.id == employee_id
    ).first()

    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    db.delete(employee)
    db.commit()

    return {"message": "Employee deleted"}

@app.put("/employees/{employee_id}",
         response_model=EmployeeResponse)
def update_employee(
        employee_id: int,
        updated_employee: EmployeeCreate,
        db: Session = Depends(get_db)
):

    employee = db.query(Employee).filter(
        Employee.id == employee_id
    ).first()

    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    employee.name = updated_employee.name
    employee.email = updated_employee.email
    employee.department = updated_employee.department
    employee.salary = updated_employee.salary

    db.commit()
    db.refresh(employee)

    return employee