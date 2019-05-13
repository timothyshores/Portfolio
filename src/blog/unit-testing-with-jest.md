---
title: "Unit Testing with Jest"
date: "2019-05-13"
---


**Manual Testing** 

*Manually trying various inputs and checking if the output matches your expected outputs*

- **Pros** - Easy to setup

- **Cons** - When a codebase grows in complexility it becomes harder to manually test a codebase

---

**Initial Repo: https://github.com/LambdaSchool/webtesting-i-guided**

1. Install jest via yarn
```
yarn add --dev jest
```
2. Update scipts in `package.json` to use jest
```
"scripts": {
        "test": "jest --watch"
    },
```
3. Run `yarn test` in terminal 
4. Write our first test in `calculator.spec.js`
   
```
it('runs the test', () => {
    //arrage - setup
    const expected = true;

    //act - run system under test condition
    const actual = true;

    //assert - verify that it works
    expect(actual).toBe(expected);
});
```

The terminal will output

```
PASS  calculator/calculator.spec.js
✓ runs the test (1ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.255s, estimated 1s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.

```

5. Rename `calculator.spec.js` to `calculator.test.js`
   - *Jest will test all files that include `.spec` or `.test` in the filename and any files in a folder named `__tests__`*

6. Write a test that describes that add method in `calculator.test.js`

```
const { add } = require('./calculator.js');

describe('calculator.js', () => {
    describe('add() method', () => {
        it('return the sum of two numbers', () => {
            expect(add(2, 2)).toBe(4);
            expect(add(2, 1)).toBe(3);
            expect(add(2, 0)).toBe(2);
            expect(add(0, 1)).toBe(1);            
        });
    });
});
```

7. Update the add() function in `calculator.js`

```
module.exports = {
    add,
};

function add(num1,  num2) {
    return num1 + num2;
}

```

8. Write a test in `calculator.spec.js` to check if the function can recieve multiple arguements
   
```
it('returns the sum of multiple values', () => {
            expect(add(1, 2, 3)).toBe(6);
            expect(add(1, 2, 3, 4)).toBe(10);
            expect(add(1, 2, 3, 4, 5)).toBe(15);
        });
```
9. Update add() function in `calculator.js`

```
function add(...args) {
    return args.reduce((previous, current) =>
        previous + current, 0
    );
}
```

10. Write a test in `calculator.spec.js` to check if the function can recieve an array as an input

```
it('returns the sum of an array', () => {
    expect(add([1, 2])).toBe(3);
    expect(add([1, 2, 3])).toBe(6);
    expect(add([1, 2, 3, 4])).toBe(10);
});
```

11. Update add() function in `calculator.js`

```
function add(args) {
    const array = Array.isArray(args) ? args : [...arguments];

    return array.reduce((previous, current) =>
        previous + current, 0
    );
}
```

**Final Repo: https://github.com/timothyshores/webtesting-i-guided**