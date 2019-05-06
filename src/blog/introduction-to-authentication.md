---
title: "Introduction to Data Authentication using bcryptjs"
date: "2019-05-06"
---

**Initial Repo: https://github.com/LambdaSchool/webauth-i-guided**


1. Install **bcryptjs** by running `yarn add bcryptjs` in the terminal
2. Import **bcryptjs** into `index.js` using require syntax 
   
    `const bcrypt = require('bcryptjs')`;

---

***We are given the following POST request endpoint to /api/register***

```
server.post('/api/register', (req, res) => {
  let user = req.body;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
```

---

3. Use **bcryptjs** to hash the password passed in via `req.body`

```
server.post('/api/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});
```

---

***We are given the following POST request endpoint to /api/login***

```
server.post('/api/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
```

---

4. Use **bcryptjs** to check if the unhashed password passed in by the user via `req.body` is equal to the hashed password of the user in the User's table

```
server.post('/api/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});
```

---

***We are given the following GET request endpoint to /api/users***

```
server.get('/api/users', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
```

---


5. Verify that the username and password in `req.headers` matches the username and password found in the Users table. If the username and password match then return a json object of all registered users. If either the username or the password do not match then return the status 401 with the message "Invalid Credentials".


Add a middleware function called protected to the get request endpoint in `index.js`

```
server.get('/api/users', protected, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});
```

Create a new folder and a new file called `auth/protected.js` with the following 

```
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model.js');

function protected(req, res, next) {
    const { username, password } = req.headers;

    if (username && password) {
        Users.findBy({ username })
            .first()
            .then(user => {
                (user && bcrypt.compareSync(password, user.password))
                    ? next()
                    : res.status(401).json({ message: 'Invalid Credentials' });
            })
            .catch(error => {
                res.status(500).json(error);
            });
    }
    else {
        res.status(400).json({ message: 'Invalid Credentials' })
    }
}

module.exports = protected;
```

Import custom middleware into `index.js` using require syntax

    const protected = require ('./auth/protected');

**Final Repo: https://github.com/timothyshores/webauth-i-guided**