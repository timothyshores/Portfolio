---
title: "Testing RESTful API With Jest And Supertest.md"
date: "2019-05-16"
---

*Time Estimates should always include time for testing and documentation*

**Initial Repo: https://github.com/LambdaSchool/webtesting-iv-guided**

1. Install supertest as a dev dependency by running `yarn add supertest --dev`
2. Update `package.json` and add new jest key 

    ```javascript
    "jest": {
        "devEnvironment": "node"
    }
    ```

3. Generate `jest.config.js` by running `npx jest --init` with the following options
4. Overwrite `jest.config.js`

    ```javascript
    const includeCoverage = process.env.DB_ENV === 'testing';

    module.exports = {
        collectCoverage: includeCoverage,
        coverageDirectory: 'coverage',
        testEnvironment: 'node',
    };
    ```

5.