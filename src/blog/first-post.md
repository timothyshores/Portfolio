---
title: "Introduction to Relational Databases and SQL"
date: "2019-04-25"
---

# Introduction to Relational Databases and SQL

___
  
__Acronyms__
- DBMS - Database Management System
- RDBMS - Relaional Database Management System
- SQ: -  Structured Query Language

__Definitions__
- Schema - the structure of a database
___

A good or bad database can make or break an entire application. As an example when submitting your Airtable daily retrospective form when hundreds of other Lambda students are submitting a daily retrospective form.

Most relational database tables can be visualized as a sheet in Google Sheets or Microsoft Excel. 

__RDBMS vs non-relational DBMS__
- Example of RDBMS include PostgreSQL and MySQL
- Example of non-relational DBMS include MongoDB

*Note: A database is not the same thing as a Database Management System (DBMS)*

__Databases constist of__

- Tables 
  - Tables contain rows
    - Rows contain more or more columns
- Store Procedures which are user created functions

__SQL (pronounced "ess-que-el")__
- Data Manipulation Lanuage (DML) - are are to change the data in the database
  - Examples include

___

#### Guide Demo
__Demo Link:__ <https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all>


To view all records in a database
`SELECT * FROM TableName`

E.g. to view all employees in the Employee table
`SELECT * FROM Employees`

Get the specific colunns in a table
`SELECT ColumnName1, ColumnName2 FROM TableName`

Get the the first and last name of all employees
` SELECT FirstName, LastName FROM Employees `

Get the employees with the firstName Janet
```
SELECT * FROM Employees
WHERE FirstName = "Janet"
```

Get the employees with the firstName Janet or firstName Adam
```
SELECT * FROM Employees
WHERE FirstName = "Janet" 
OR FirstName = "Adam"
```

Get the employees with the firstName Janet or firstName Adam
```
SELECT * FROM Employees
WHERE FirstName = "Janet" 
OR FirstName = "Adam"
```

Get the employees with the firstName's Janet, Adam, Michael and Anne
```
SELECT * FROM Employees
WHERE FirstName in ('Janet', 'Adam', 'Michael', 'Anne')
```

Get the employees with the EmployeeID > 5
```
SELECT * FROM Employees
WHERE EmployeeID > 5 
```

