---
title: "Algorithms"
date: "2019-08-12"
---

#Algorithms

---

##Big O Notation
**Reference: bigocheatsheet.com**

Measures how efficient a given piece of code is and answers questions such as how long does it take to sort a list? This is also reffered to as the number of operations or number of comparisons.

- **Contanst Time O(1)** it takes the same amount of time regardless of the number of elementso
  &nbsp;

  ```
  def first_plus_one(list):
      return list[0] + 1
  ```

- **Linear time is O(n)** the time it takes is a constant based on the number of elements in the list
  &nbsp;

  ```
  def print_every_element(list):
      for index in list:
          print(index)
  ```

- **Logarithmic time is O(log n)** means that you can throw away half of the list after every search like a binary search.
  - _This is how you would use a physical copy of the yellow pages to find the phone number of a bussiness or look up a definition in a physical print dictionary_

* **Exponential time is O(2^n)** meaning that the time it takes doubles for every additional element that is added to a list &nbsp; &nbsp;

####Rules for determing Big O

1. Things in sequence: add big Os
2. Drop constant factors
   - O(1), O(2), O(3), ... are all constant time O(1)
   - O(n/2), O(n/3), O(n/4), ... are all linear time O(n)
3. Keep dominant term
   - O(n+1), O(n+2), O(n+3), ... are all linear time O(n)

##Sorting

###Insertion Sort

```
class Book:
    def __init__(self, title, name, genre):
        self.title = title
        self.name = name
        self.genre = genre

    def __repr__(self):
        print(f"Book(repr({self.title}), repr({self.name}), repr({self.genre}))

def insertion_sort(books):
    for i in range(1, len(books)):
        j = i
        while j > 0 and books[j].genre < books[j - 1].genre:
            books[j], books[j - 1] = books[j - 1], books[j] # swap
            j -= 1

books = [
    Book("Title 0", "Name 0", "4 Genre"),
    Book("Title 1", "Name 1", "2 Genre"),
    Book("Title 2", "Name 2", "5 Genre"),
    Book("Title 3", "Name 3", "3 Genre"),
    Book("Title 4", "Name 4", "1"Genre"),
    Book("Title 5", "Name 5", "0"Genre"),
]
```

##Recursion

Recursion is about finding identically defined subproblems

**Example:** _Print the integers 10 to negative infinity_

```
def foo(n):
    print(n)
    foo(n-1)

foo(10)
```

**Example:** _Print the integers 10 to 1_

```
def foo(n):
    if n== 0: # base case
        return
    print(n)
    foo(n-1)

foo(10)
```

**Example:** _Fibonacci sequence is the sum of the previous two numbers_

```
def fib(n):
    if n == 0:
        return 0

    if n == 1:
        return 1:

    return fib(n-1) + fib(n-2)

print(fib(0)) # 0
print(fib(1)) # 1
print(fib(2)) # 1
print(fib(3)) # 2
print(fib(4)) # 3
print(fib(5)) # 5
print(fib(6)) # 8
print(fib(7)) # 13
```

**Binary Search Tree** - a node-based binary tree data structure which has the following properties:

- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree.

_Pseudocode_

```
def explore(node:)
    if node == None
        return
    print(node.value)

    explore(node.left)
    explore(node.right)
```

###Quicksort

**Steps**

1. Pick the pivot _Usually the first number_
2. Partion
3. Combine

**_Example:_**

1. Given `[5,3,8,2,9,4,1,7]` the pivot is 5 since it's the first element.
2. After the first partion we get `[3,2,4,1]`, `[5]` and `[8,9,7]`.
   - Notice that 5 is in it's final position regardless of how `[3,2,4,1]` or `[8,9,7]` is sorted.
3. Combine to get `[3,2,4,1,5,8,9,7]`. Rinse and repeat.

**Implementation**

```
def partion(list):
    left= []
    pivot = list[0]
    right = []

    for element in list[1:]: #grab everything in the list besides the first element
        if v <= pivot:
            left.append(value)
        else:
            right.append(value)
    return left, pivot, right

def quicksort(list)
    if len(l) <= 1: # base case includes end case if list == []
        return l
    left, pivot, right = partion(list)
    return quicksort(list) + [pivot] + quicksort(right)
```

**Refactor:** implement quick sort in place or without creating a new list

```
def partion(list):
    left= []
    pivot = list[0]
    right = []

    for element in list[1:]: #
        if v <= pivot:
            left.append(value)
        else:
            right.append(value)
    return left, pivot, right

def quicksort(list)
    if len(l) <= 1:
        return l
    left, pivot, right = partion(list)
    return quicksort(list) + [pivot] + quicksort(right)
```

##Algorithms

Big O Notation describes how algorithms scale as the amount of data increases

####Factorial

**_Examples_**
_6! = 6 x 5 x 4 x 3 x 2 x 1 = 720_
_5! = 5 x 4 x 3 x 2 x 1 = 120_
_4! = 4 x 3 x 2 x 1 = 24_
_3! = 3 x 2 x 1 = 6_
_2! = 2 x 1 = 2_
_1! = 1_
_0! = 1_

**_Recursive Solution_**

```
def recursive_factorial(num):
    if num == 0:
        return 1
    else:
        return num * recursive_factorial(num - 1)
```

**_Iterative Solution_**

```
def iterative_factorial(num):
    product = 1  # acculator
    for num in range(1, num + 1):
        product *= num
    return product
```

####Power / Exponents

**_Example_**
_2^0 = 1
2^1 = 2
2^2 = 2 x 2 = 4
2^3 = 2 x 2 x 2 = 8
2^4 = 2 x 2 x 2 x 2 = 16_

```
def iterative_exponents(base, exponent):
    product = 1
    for _ in range(exponent):
        product *= base
    return product
```

```
def recursive_exponents(base, exponent):
    if exponent == 0:
        return 1
    return base * recursive_exponents(base, exponent - 1)
```

#### Fibonacci

What happens if I run into the problem where the instructions on my shampoo say to rinse and repeat and I realize that there's no base case?

How would you go about solving rock, paper scissors?

Idk if it's off topic but how do you find all unique permutation of for a given string using recursion. It's along the lines of the rock, paper, scissors problem.

####Caching

```
def slow(x):
    if x not in cache:
        y = x
        for i in range(100000000):
            y *= 1.0000003
            y *= 1.0000003
    return cache[x]

for i in range(5):
    print(slow(i))
```

####Paint Bucket Tool Algorithm
Algorithm to determine which pixels should be colored in Photoshop which will be reffered to as the flood fill algorithm

####Anagrams

Given a list of words

```
def is_anagram(string1, string2)
    if len(string1) != len(string2):
        return False

    for letter in string1:


```

On line 29.5 
```
for word in fp:

```

