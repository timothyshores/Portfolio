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
