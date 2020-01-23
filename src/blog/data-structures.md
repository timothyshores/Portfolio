---
title: "Data Structures"
date: "2019-08-12"
---

#Data Structures

---

### Que
Like a line at the DMV, movie theatre box office where the first element in is the first element out.

Another real world example of a stack is a diner restaurant between a server and the line cooks. A server writes down the customer's order on a sheet of order paper. The server attaches the paper to a zipline and the kitchen processes the orders in which they were recieved.

If you have a que CBA where A is the first element and C is the last element then A would be first, then B and lastly C.

The acronym is first in first out (FIFO).

### Stack

A stack is like a jar of pringles. If you put a chip in at the top then it's going to be the first chip out since you can only grab from the top.

The acronym is last in first out (LIFO).

### Arrays

Best use: reading data in O(1) constant time
Downsides: Inserting and deleting data worst case scenario takes O(n) linear time. If an element is inserted or deleted to the front then the previous n number of elements must be copied into the new array.

Properties

- Length
- Indexes start at 0
- O(1) get value at a given index

### Linked List

Best use: inserting and deleting data in O(1) constant time
Downsides: Reading data worst case scenario takes O(n) linear time to traverse through every node in the lined list.

- Does not have indexes
- Have to start at the head
- O(n) to traverse through

```python
class ListNode:
    def __init__(self, value, prev=None, next=None):
        self.value = value
        self.prev = prev
        self.next = next
```
