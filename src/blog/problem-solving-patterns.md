---
title: "Problem Solving Patters"
date: "2020-01-23"
---

# Problem Solving Patterns

---

> My personal notes for the [JavaScript Algorithms and Data Structures Masterclass by Colt Steele](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/) on [Udemy](https://www.udemy.com/) 

#### Patterns Include

- Frequency counter
- Multiple Pointers
- Divide and Conquer
- Sliding Window
- Dynamic Programming
- Greedy Algorithms
- Backtracking

##### Frequency counter

Use an object to store how often a result comes up.

> *This was used in the example problem in the [Javascript Algorithms and Data Structures](javascript-algorithms-and-data-structures.md) post.*

This pattern can improve preformance from O(N^2) quadratic time to O(N) linear time.

**Example Problem**

Write a function called same which accepts two arrays. The function should return true if every value in the first array has it's correspoonding value squared in the second array. Order does not matter but the frequency of values must be the same.

***Sample Output***

```javascript
same([1,2,3], [4,1,9]) //  true because 1^2 = 1, 2^2 = 4 and 3^2 = 9 
same([1,2,3], [1,9]) //  false because 4 or 2^2 is missing from the 2nd array
same([1,2,1], [4,4,1]) //  false because there's only 1 number 1 in the 2nd array 
```

