from pydantic import BaseModel, EmailStr

class EmployeeCreate(BaseModel):
    name: str
    email: EmailStr
    department: str
    salary: float

class EmployeeResponse(EmployeeCreate):
    id: int

    class Config:
        from_attributes = True