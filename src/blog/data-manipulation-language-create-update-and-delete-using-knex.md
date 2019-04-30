---
title: "Data Manipulation Language - Create, Update and Delete using knex"
date: "2019-04-30"
---

__Acronyms__
- DML - Data Manipulation Language
- ORM - Object Relational Mapper
___

### Create, Update and Delete using SQL
__Demo Link:__ https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all

Add a row entry into a table
```
INSERT INTO customers 
(customerName, contactName, address, city, postalCode, country)
values ('Awesome Devs', 'Will Conn', '1 Awesome Devs Drive', 'Provo', '12345', 'USA')
```

Update an entire column in a table
```
select * from customers
update customers set country = 'United States of America'
where country like 'Uni%'
```

Delete a specific row entry
```
select * from customers
delete from customers
where customerId = 92
```
___

### Use SQL Lite Studio and Knex to Create a database and Knex to Create, Read, Update and Delete Records


Knex is a higher level abstraction from modifying a database manually using SQL. Knex allows developers to use Javascript to preform Create, Read, Update and Delete (CRUD) operations on a SQL database. 

Most ORMs include a query builder which allow a developer to use a back end language or framework to preform CRUD operations on a database. Next.js is an example of a query builder.

___
### Guided Demo

**To follow along clone the [Demo Repo](https://github.com/LambdaSchool/webdb-ii-guided "Demo Repo").** 

1. Create a database using SQL Lite Studio
   -  Create a roles_db.db3 in the /data folder
  
2. Add a roles table to the DB
   -  Create primary key column for ID 
   -  Create a unique column called name
  
3. Install knex in 
   - Run `yarn add knex sqlite3` in the root directory in terminal
   - Import knex into roles/roles-router.js
```
const knex = require('knex');
```

4. Configure knex to modify our database in roles/roles-router.js

```
const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/rolex.db3'
    },
    useNullAsDefault: true,
};

const db = knex(knexConfig);
```

5. List all existing roles in roles/roles-router.js

```
router.get('/', (req, res) => {
    db('roles')
        .then(roles => res.status(200).json(roles))
        .catch(err => console.log(err));
});
```

6. Create a new role in roles/roles-router.js
    
```
router.post('/', (req, res) => {
    db('roles')
        .insert(req.body, 'id')
        .then(results => res.status(200).json(results))
        .catch(err => res.status(500).json(err));
});
```

7. List a role by ID in roles/roles-router.js
   
```
router.get('/:id', (req, res) => {
    db('roles')
        .where({ id: req.params.id })
        .then(role => res.status(200).json(role[0]))
        .catch(err => res.status(500).json(err));
});
```

We can refactor the code above to include 404 and ternary operator
```
router.get('/:id', (req, res) => {
    const message404 = { message: 'Role not found' }

    db('roles')
        .where({ id: req.params.id })
        .first()
        .then(role => {
            role === undefined
                ? res.status(404).json(message404)
                : res.status(200).json(role)
        })
        .catch(err => res.status(500).json(err));
});
```

8. Update a role in roles/roles-router.js

```
router.put('/:id', (req, res) => {
  db('roles')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: `${count} ${count > 1 ? 'records' : 'record'} updated`,
        });
      } else {
        res.status(404).json({ message: 'Role does not exist' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
```


9.  Delete a role in roles/roles-router.js

```
router.delete('/:id', (req, res) => {
  db('roles')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: `${count} ${count > 1 ? 'records' : 'record'} deleted`,
        });
      } else {
        res.status(404).json({ message: 'Role does not exist' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
```

**The Final Repo is available on my [GitHub](https://github.com/LambdaSchool/webdb-ii-guided "Final Repo").**

---