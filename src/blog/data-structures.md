---
title: "Data Structures"
date: "2019-08-12"
---

#Data Structures

---

###Que
Like a line at the DMV, movie theatre box office where the first element in is the first element out.

If you have a que CBA where A is the first element and C is the last element then A would be first, then B and lastly C.

###Stack
A stack is like a jar of pringles. If you put a chip in at the top then it's going to be the first chip out since you can only grab from the top.

The acronym is last in first out (LIFO).

### Arrays

Properties

- Length
- Indexes start at 0
- O(1) get value at a given index

###Linked List

- Does not have indexes
- Have to start at the head
- O(n) to traverse through

```
class ListNode:
    def __init__(self, value, prev=None, next=None):
        self.value = value
        self.prev = prev
        self.next = next
```
