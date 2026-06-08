# Employee Management System

A full-stack Employee Management System built using **FastAPI**, **PostgreSQL**, and **Vanilla HTML/CSS/JavaScript**. The application allows users to perform complete CRUD (Create, Read, Update, Delete) operations on employee records while ensuring data validation and persistent database storage.

---

# Project Objective

The goal of this project is to design and develop a simple management system that demonstrates:

* CRUD Operations
* Database Integration
* Backend API Development
* Frontend Development
* Data Validation
* Clean Project Structure
* Client-Server Architecture

This project was developed independently as part of a software development assessment.

---

# Features

### Create Employee

Add a new employee with:

* Name
* Email
* Department
* Salary

### Read Employees

View all employee records stored in the database.

### Update Employee

Modify employee information.

### Delete Employee

Remove employee records from the system.

### Validation

* Required fields validation
* Email format validation
* Unique email constraint
* Data type validation

### Database Persistence

All records are stored permanently in PostgreSQL.

---

# Technology Stack

## Frontend

### HTML

Used for creating the structure and layout of the application.

### CSS

Used for styling and improving the user interface.

### JavaScript

Used for:

* Form handling
* API requests
* Dynamic table rendering
* Client-side interactions

### Why Vanilla HTML/CSS/JS?

For a CRUD-based management system, using Vanilla JavaScript keeps the application lightweight and easy to understand while demonstrating core web development concepts without additional framework complexity.

---

## Backend

### FastAPI

FastAPI is used to build RESTful APIs.

### Why FastAPI?

* High performance
* Automatic API documentation
* Built-in validation using Pydantic
* Clean and readable syntax
* Easy PostgreSQL integration

Benefits:

* Faster development
* Reduced boilerplate code
* Industry-standard API development practices

---

## Database

### PostgreSQL

PostgreSQL is used for persistent storage of employee data.

### Why PostgreSQL?

* Open-source
* Reliable
* ACID compliant
* Supports constraints and indexing
* Widely used in production environments

Benefits:

* Data consistency
* Scalability
* Robust relational database features

---

## ORM

### SQLAlchemy

SQLAlchemy is used to communicate with PostgreSQL.

### Why SQLAlchemy?

Instead of writing raw SQL queries repeatedly, SQLAlchemy allows working with Python objects.

Benefits:

* Cleaner code
* Better maintainability
* Database abstraction
* Easier CRUD operations

---

# System Architecture

```text
+---------------------+
|      Frontend       |
| HTML / CSS / JS     |
+----------+----------+
           |
           | HTTP Requests
           |
           v
+---------------------+
|       FastAPI       |
| REST API Layer      |
+----------+----------+
           |
           | SQLAlchemy ORM
           |
           v
+---------------------+
|     PostgreSQL      |
| Database Layer      |
+---------------------+
```

---

# Application Workflow

```text
User
  |
  v
Frontend Form
  |
  v
JavaScript Fetch API
  |
  v
FastAPI Endpoint
  |
  v
SQLAlchemy ORM
  |
  v
PostgreSQL Database
  |
  v
Response Returned
  |
  v
Updated UI
```

---

# Folder Structure

```text
employee-management-system/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   └── schemas.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── venv/
│
├── requirements.txt
│
└── README.md
```

---

# Database Design

## Employee Table

| Column     | Data Type | Constraints      |
| ---------- | --------- | ---------------- |
| id         | Integer   | Primary Key      |
| name       | String    | Not Null         |
| email      | String    | Unique, Not Null |
| department | String    | Not Null         |
| salary     | Float     | Not Null         |

---

# API Endpoints

## Home

```http
GET /
```

Returns application status.

---

## Create Employee

```http
POST /employees
```

Creates a new employee record.

---

## Get All Employees

```http
GET /employees
```

Returns all employees.

---

## Update Employee

```http
PUT /employees/{id}
```

Updates employee details.

---

## Delete Employee

```http
DELETE /employees/{id}
```

Deletes an employee record.

---

# Validation Strategy

## Frontend Validation

* Required fields
* Empty field checks
* Salary validation

## Backend Validation

Implemented using Pydantic:

* Email validation
* Data type validation
* Request body validation

## Database Validation

* Unique email constraint
* Primary key enforcement

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd employee-management-system
```

---

## Create Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run Backend

```bash
cd backend
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

API Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## Run Frontend

```bash
cd frontend
python3 -m http.server 5500
```

Frontend URL:

```text
http://localhost:5500
```

---

# Future Enhancements

* Employee Search
* Department Filtering
* Authentication & Authorization
* Dashboard Analytics
* Pagination
* Docker Deployment
* Unit Testing

---

# Learning Outcomes

Through this project, the following concepts were implemented and demonstrated:

* Full Stack Development
* REST API Design
* CRUD Operations
* PostgreSQL Database Integration
* SQLAlchemy ORM
* FastAPI Development
* Frontend-Backend Communication
* Data Validation
* Software Architecture Design

---

# Author

Saksham

Employee Management System using FastAPI, PostgreSQL, HTML, CSS and JavaScript.

