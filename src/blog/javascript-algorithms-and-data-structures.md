---
title: "JavaScript Algorithms and Data Structures"
date: "2020-01-22"
---

# JavaScript Algorithms and Data Structures

---

> My personal notes for the [JavaScript Algorithms and Data Structures Masterclass by Colt Steele](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/) on [Udemy](https://www.udemy.com/) 

#### Definition

**Algorithm** - A process or set of steps to accomplish a certain task

---


**How do you improve your problem solving skills in an interview setting?**

1. Devise a plan
2. Improve common problem solving patterns


**How to solve any problem**
1. Understand the problem
2. Explore concrete examples
3. Break it down
4. Simplify and solve
5. Look back and refactor

***Common Problem Solving Patterns Include***
- Frequency counters
- Two pointer problems
- Divide and Conquer

---

#### Step 1: Understand the problem

- Can you restate the problem in your own words?
- What are the inputs that go into the problem?
- What are the outputs from the solution to the problem?
- Do you have enough information to solve the problem?
- How should you label the data in the problem?

**In an interview setting**
1. Restating the problem in your own words 
2. Provide two or three simple examples
3. Provide more complex examples
4. Explore edge cases such invalid inputs, empty inputs, additional inputs, etc.

---

#### Step 2: Explore concrete examples

**Example Problem**
Write a function that takes a string and returns the frequency count of each character in the string.

1. Restate the problem
    - The function returns the number of times that every character is in a given string
2. Provide Simple Examples
    ````javascript
    charCount('aaa'); // returns {a: 3}
    charCount('hello'); // returns {h: 1, e: 1, l: 2, o: 1}
3. Provide more complex examples
    ```javascript
    charCount('Hi hello Hey');
    ```
    - Are the outputs case senstive? 
    - Is h counted 3 times? 
    - Is capital H counted 2 times and lowercase h counted 1 time? 
4. Explore edge cases
    ```javascript
    charCount();
    charCount("");
    charCount(123);
    charCount(foo: bar);
    charCount(true);
    ```
    - What should the function return given no input?
    - What should the function return given an empty string?
    - What should the function return given a number?
    - What should the function return given an object?
    - What should the function return given a booolean?
 
---

#### Step 3: Break it down

Write down the high level steps or pseudocode explaining how you will solve the problem.

**Step 3A**
```javascript
const charCount = str => {
    // do something
    // return an object where the keys are letters and numbers and the values are the number of occurances or the frequency of each character in the input string str
};
```

**Note:** The interview has decided that the function only counts numbers and letters and if a string contains the same letter in both uppercase and lowercase then it is counted both times. As an example, `charCount("Aa")` will return `{a: 2}`.

**Step 3B**
```javascript
const charCount = str => {
    // initialize an empty object
    // iterate or loop through the string
    // lowercase the current character in the loop
    // check that the character is a number or letter
    // if the character is a NOT a key in the object
        // Add the character as a key and set the value to 1
    // if the character is a key in the object
        // Increment the key's value by 1
    // return an object where the keys are letters and numbers and the values are the number of occurances or the frequency of each character in the input string str
};
```

---


#### Step 4: Simplify and solve

- Figure out what's difficult or challenging and ignore it
- Come up with a simple solution
- Incorporate the difficult part into your solution

***Interview solution***
```javascript
// function charCount takes in a single string
const charCount = str => {
  // initialize an empty counter object
  const counter = {};
  // iterate through input string
  for (let char of str) {
    // if char is either a number or letter
    if (char.match(/^[a-z0-9]+$/i)) {
      // if char is a key in the object i
      if (counter.hasOwnProperty(char)) {
        // increment the key's value by 1
        ++counter[char];
      }
      // char is a NOT a key in the object,
      else {
        // add the character as a key and set the value to 1
        counter[char.toLowerCase()] = 1;
      }
    }
  }
  // return counterobject
  return counter;
};
```

[![Edit romantic-wozniak-b5sho](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/romantic-wozniak-b5sho?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js&theme=dark)

***Production solution***
```javascript
const charCount = str => {
  const counter = {};
  for (let char of str) {
    if (char.match(/^[a-z0-9]+$/i))
      counter.hasOwnProperty(char)
        ? ++counter[char] = counter[char]
        : (counter[char.toLowerCase()] = 1);
  }
  return counter;
};
```

[![Edit red-moon-k9b94](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/red-moon-k9b94?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js&moduleview=1&theme=dark)

