---
title: "Hash Tables and Blockchain"
date: "2019-09-03"
---

## Arrays

**Definition**: A sequence of elements of the same type stored in a continuous block of memory

| Memory Block | 1        | 2        |
| ------------ | -------- | -------- |
| **Data**     | "Foo"    | "Bar"    |
| **Index**    | `arr[0]` | `arr[1]` |

If we want to add the mumber 3 to our array them we would need to resize the array and copy the 2 elements over in memory. Typically this will double the size of the array. Python use dynamic arrays which Python refers to as a list.

***Dynamic vs Static Arrays:*** A dynamic array can increase it's size while a static array has a fixed size.

- ***Getting and setting*** items in a list is a constant time or O(1) operation
- ***Inserting*** is linear time or O(n) where n is the number of items that need to be shifted over. 
- ***Appending*** to the end of an array that is not full is constant time or O(1).

***Implementing A Dynamic Array in Python***
```python
class DynamicArray
    # Constructor
    def __init__(self, size):
        # Number of elements in the current array
        self.count = 0
        # Size of the array
        self.size = size
        # Fill the array with a null value
        self.storage = [None] * size

    # Add an element to the end of the array
    def append(self, value):
        # If array is full
        if self.count == self.size:
            # Double the capacity of the array
            self.resize()
        self.storage[self.count] = value
        # Increment self.count
        self.count += 1

    # Insert an element at a specific index
    def insert(self, value, index):
        # If array is full
        if self.count == self.size:
            # Double the capacity of the array
            self.resize()
        # Loop and count down from self.count to i
        for i in range(self.count, i, -1):
            self.storage[i] = self.storage[i - 1]
        # Insert value into self.storage at index
        self.storage[index] = value
        # Increment self.count
        self.count += 1

    # Double the size of the old array, copy the elements over
    def resize(self):
        # Double the size of the old array
        self.size *= 2
        # Create a mew array called temp_array
        temp_storage = [None] * self.size
        # Copy old elements in self.storage into temp_storage
        for i in range(self.count):
            temp_storage[i] = self.storage[i]
        # Set self.storage to temp_storage
        self.storage = temp_storage

arr1 = DynamicArray(8)
```

## Hash Tables

**Definition**: A collection of key value pairs. 

*The same data structure as a object in Javascript or a dictionary in Python.*

A hash function takes in a value and returns an a deterministic index and is non-invertible.

```python
def hash1(key):
    return len(key) % length_of_array
```

```python
def hash2(key, salt):
    return (len(key) * salt) % length_of_array
```

```python
def dj2b(key):
    # large prime number salt
    salt = 5381
    # scramble each letter
    for char in key:
        hash_value = (salt << 5)  + salt + char

    return hash_value
```

Popular hashing functions include SHA-256 which is used in Bitcoin or bcrypt.

Retrieving and adding to a hash table is constant time O(1).

**Project:** https://github.com/LambdaSchool/Hash-Tables