---
title: "Introduction to Relational Databases and SQL"
date: "2019-04-29"
---

![Introduction to Relational Databases and SQL Stock Photo](../images/introduction-to-relational-databases-and-sql.jpg)

<center>

*Image by [Pam Baker](https://www.pcmag.com/author-bio/pam-baker "Pam Baker") via [PCMag](https://www.pcmag.com/article/362836/google-simplifies-machine-learning-with-sql "PCMag")*

</center>

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
    - Every table should have a primary key column
- Store Procedures which are user created functions

__SQL (pronounced "ess-que-el")__
- Data Manipulation Lanuage (DML) - are are to change the data in the database
  - Examples include

___

### Guided Demo
__Demo Link:__ <https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all>


To view all records in a database
```sql
SELECT * FROM TableName
```

E.g. to view all employees in the Employee table
```sql
SELECT * FROM Employees
```

Get the specific colunns in a table
```sql
SELECT ColumnName1, ColumnName2 FROM TableName
```

Get the the first and last name of all employees
```sql
SELECT FirstName, LastName FROM Employees
```

Get the employees with the firstName Janet
```sql
SELECT * FROM Employees
WHERE FirstName = "Janet"
```

Get the employees with the firstName Janet or firstName Adam
```sql
SELECT * FROM Employees
WHERE FirstName = "Janet" 
OR FirstName = "Adam"
```

Get the employees with the firstName Janet or firstName Adam
```sql
SELECT * FROM Employees
WHERE FirstName = "Janet" 
OR FirstName = "Adam"
```

Get the employees with the firstName's Janet, Adam, Michael and Anne
```sql
SELECT * FROM Employees
WHERE FirstName IN ('Janet', 'Adam', 'Michael', 'Anne')
```

Get the employees without the firstName's Janet, Adam, Michael and Anne
```sql
SELECT * FROM Employees
WHERE FirstName NOT IN ('Janet', 'Adam', 'Michael', 'Anne')
```

Get the employees with the EmployeeID > 5
```sql
SELECT * FROM Employees
WHERE EmployeeID > 5 
```

Get the employees listed alphabetically by last name
```sql
SELECT * FROM Employees
ORDER BY LastName
```

Get the employees listed alphabetically (A, B, ... , Z) by last name
```sql
SELECT * FROM Employees
ORDER BY LastName
```


Get the first 5 employees with the last names listed alphabetically
```sql
SELECT * FROM Employees
ORDER BY LastName
LIMIT 5
```

Get the employees listed reverse alphabetically (Z, Y, ... , A) by last name
```sql
SELECT * FROM Employees
ORDER BY LastName
```

Get the number of total employees with a unique EmployeeID
```sql
SELECT COUNT(DISTINCT EmployeeID) FROM Employees;
```

Get a list of unique countries in alphabetical order from the Customers table
```sql
SELECT DISTINCT Country FROM Customers
ORDER BY Country
```

Get a count of unique countries in alphabetical order from the Customers table
```sql
SELECT COUNT(DISTINCT Country) 
FROM Customers
ORDER BY Country
```

Same as above but change the column name to CountryCount. *Also known as aliases*
```sql
SELECT COUNT(DISTINCT Country) as CountryCount 
FROM Customers
ORDER BY Country
```

Get a list of employees who's first name begins with *"An..."*
```sql
SELECT * FROM Employees
WHERE FirstName like 'An%'
```

Get a list of employees who's last name ends with *"...an"*
```sql
SELECT * FROM Employees
WHERE Lastname like '%an'
```