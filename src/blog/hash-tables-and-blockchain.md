---
title: "Hash Tables and Blockchain"
date: "2019-09-03"
---

## Arrays

Definition: A sequence of elements of the same type stored in a continuous block of memory

A dynamic array can increase it's size while a static array has a fixed size.

Getting and setting items in a list is a constant time or O(1) operation
Inserting is linear time or O(n) where n is the number of items that need to be shifted over. Appending to the end of an array that is not full is constant time or O(1).

```python
class DynamicArray
    def __init__(self, capacity = 8):
        self.count = 0
        self.capacity = capacity
        self.storage = [None] * 8
    def append(self):
        if self.count >= self.capacity:
            print("ERROR: Array is full)
            return
        self.storage[self.count] = value
        self.count += 1
    def resize(self):
        self.capacity *= 2
        new storage = [None] * self.capacity
        for i in range(self.count):
            new_storage[i] = self.storage[i]
        self.storage = new_storage[i]

arr1 = DynamicArray(8)

```

Python use dynamic arrays which Python refers to as a list.

SHA-256 will result in a combination of 256 1s and 0s or 64 characters
