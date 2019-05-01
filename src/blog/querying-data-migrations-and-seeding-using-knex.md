---
title: "Querying Data, Migrations and Seeding using knex"
date: "2019-05-01"
---

##Query data from multiple tables using SQL JOIN

`JOIN` is a SQL command that joins two or more tables together into a single database table. `JOIN` requires two or more tables to have the same column with matching values. *Example: a Customers table and a Orders table that both contain CustomerID*

__Demo Link:__ https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top

__Task__: Display a table with all orders and customers on a single table

``
SELECT * 
FROM Customers
INNER JOIN Orders on Customers.customerID = Orders.customerID
``

__Task__: Display a table with all orders, customers and employees on a single table

```
SELECT *
FROM Orders
INNER JOIN Customers on Customers.customerID = Orders.customerID
INNER JOIN Employees on Employees.employeeId = Orders.employeeID
```

---
##Create Database Using Javascript

***Motivation:*** By creating a database using Javascript it alows a developer to get any previous version of the database. Migrations are like version control system such as Git or Redux but for your database. A developer can recreate the exact database at any point in time.

__Demo Link:__ https://github.com/LambdaSchool/webdb-iii-guided

*To view all knex functions run `npx knex` in terminal*


1. Initialize a database: `npx knex init`
  - This will generate a knexfile.js in the root directory of your project repo
2. Modify the knexfile.js
     - *We do not need the staging or production environments for this demo*
  
```
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/rolex.db3'
    },
    useNullAsDefault: true,
  }
};
```

4. Run `npx knex migrate:make create_roles_table` in terminal
     - This will create migrations/20190501122556_create_roles_table.js
5. Modify migrations/20190501122556_create_roles_table.js 

___
```
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', tbl => {
        tbl.increments(); 
        tbl.string('name', 128).notNullable().unique(); 
        tbl.timestamps(true, true); 
  })
};
```
***What is this code?***

`tbl.increments();`
- Creates an auto-incrementing primary key 

`tbl.string('name', 128).notNullable().unique();` 
- Creates a unique not null column with a 128 character limit called name
  
`tbl.timestamps(true, true);` 
- Creates create_at and updated_at columns

___
6. Run `npx knex migrate:latest` in terminal
7. Run `yarn server` in terminal
8. Send a **GET** request to *localhost:5000/api/roles/* and it will return an empty array [ ] 

![](https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif)

9. Run `npx knex seed:run` in terminal
    
---