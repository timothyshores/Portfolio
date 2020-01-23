---
title: "Intro To Python"
date: "2019-08-05"
---

#Intro To Python

---

###Help

**Python**

```python
help([]) # returns documentation for lists
help({}) # returns documentation for dictionaries
help("") # returns documentation for strings
```

**Javascript**

- Google it

####Print to Console

| Javascript                    | Python                  |
| ----------------------------- | ----------------------- |
| `console.log('Hello World!')` | `print('Hello World!')` |

####Conditional statements

**Javascript**

```javascript
if (2 > 1) {
    console.log('Two is greater than one)
}
```

**Python**

```python
if 2 > 1:
    print('Two is greater than one)
```

### Arrays

**Javascript**

```javascript
const nums = [1,2,3]
console.log(nums[0]); // returns 1
console.log(numers.length); // returns 3
```

**Python**

```python
nums = [1,2,3]
print(nums[0]) # returns 1
print(nums[0:2]) # returns [1,2]
print(len(nums)) # returns 3
```

### Loops

**Javascript**

```javascript
for (let i = 0; i < 10; i++)
{
    console.log(i);
}
```

**Python**

```python
for num in range(10):
    print(num)
```

### Objects / Dictionary

**Javascript**

```javascript
const e = {
    "foo": 12,
    "bar": [1,2,3]
}
console.log(e.foo); // returns 12
```

**Python**

```python
const e = {
    "foo": 12,
    "bar": [1,2,3]
}
print(e["foo"]) # returns 12
for i in e:
    print(i) # returns foo on line 1 and then bar on line 2
```

### List Comprehensions

**Python**

_Challenge: Find the even numbers in `nums` and store the result in `events`_

```python
nums = [1, 5, 8, 12, 4, 7, 6, 2]
evens = []
```

_For Loop Solution_

```python
for num in nums:
    if num % 2 == 0: # if num is even
        evens.append(n)
```

_List Comprehension Solution_

```python
evens = [num for num in nums if n % 2 == 0]
```

### Tuple

- **Definition**: A tuple is an immutable list

```python
a = ("foo", 1, "bar", 2);

```

### Functions

- Parameters are the variable names in a function definition while arguements refers to the data being passed into the function
  - In the example below x & y are parameters while 1 & 2 are the arguements
- Function parameters are locally scoped

```python
def sum(x, y)
    return x + y

print(sum(1, 2)) # returns 3
print(x) # returns NameError: name 'x' is not defined
```

###Scope

**Without global variable**

```python
x = 10

def foo(y)
    x = 5
    return x + y

print(foo(2)) # returns 7
print(a) # returns 10

```

**With Gloabl variable**

```python
x = 10

def foo(y)
    global x
    x = 5
    return x + y

print(foo(2)) # returns 7
print(a) # returns 5

```

```python
def foo(x):
    total = 0

    def bar(y):
        total += y

    return total

print foo(2) # returns UnboundLocalError: local variable 'total' referenced before assignment
```

```python
def foo(x):
    total = 0

    def bar(y):
        nonlocal total
        total += y

    return total

print foo(20) # returns 190
```

### Named Arguements

```python
def foo(x, y, x)
    print(x, y, z)

foo(z=1, y=2, x=3) # returns 3 2 1
```

**\*args**

- \*args allows a function to take any number of inputs

```python
def sum(count, *args)
    print(count)
    print(args)

sum(1,2,3) # returns 3 on line 1 and then (1,2,3) on line 2
```

```python
def sum(count, *args)
    a = 0

    for i in args:
        a += i

    return a

sum(1,2,3) # returns 6
```

```python
def sum(count, *args)
    a = 0

    for i in args:
        a += i

    return a

sum(1,2,3) # returns 6
```

**\*\*kwargs**

```python
def foo(**kwargs):
    print(kwargs)

print(x=10, y=20) # returns a dictionary {'x': 10, 'y', 20}
```

### Classes

- Classes have inheritance, constructors, data storage and have methods

```python
class Animal:
    def __init__(self): # constructor
        self.leg_count = 4

    def get_leg_count(self):
        return self.leg_Count

    def set_leg_count(self, legs):
        self.leg_Count = legs

class Human(Animal):
    def __init__(self): # constructor
        self.leg_count = 2

a = Animal() # creates a new instance from the animal class
a.set_leg_count(2)
print(a.get_leg_count()) # returns 2

h = Human()
print(h.get_leg_count()) # returns 2
```

#### Exercise

- User Story: Create a **store** with different **departments**.
  - _Technical spec: the store object contains a number of department objects_

**Requirements**

- User Story: A store has a name
  - _Technical Spec: The store object has a name attribute and that name atttribute is a string_
- User Story: A user should be able to select a **department** and **_see all_** of the **products** in that department.
  - _Technical Spec: The store object has a method that returns all departments_
  - _Technical Spec: The department object has a method that returns all products in that department_
- A user should be able to **_list all_** **departments** in a store and **_view_** each store name

**Key Points**

- **Nouns** tend to be classe
- **_Verbs_** tend to be methods

```python
class Store
    def __init__(self, name, departments):
        self.name = name;
        self.departments = departments;

    def __str__(self):
        #Human readable string version of the object
        store = self.name + ":"
        for department_num in range(len(self.departments)):
            store += f" {department_num + 1}: {self.departments[n]}"
        return store

    def __repr__(self):
        #Python readable string version of the object
        return f"Store({repr(self.name)}, {repr(self.departments)})"

if __name__ == "__main__":
    store1 = Store("Tim's store", ["Department 1", "Department 2"])

    print(store1) # returns "Tim's store: Department 1, Department 2"
    print(repr(store1)) # returns "Store("Tim's store", ['Department 1', 'Department 2'])

    selection = input("Select department number: ")

```

#### Has-a vs Is-a Relationships

- Has-a
  - Is compositional, an object composed of other objects
  - E.g. stores are made up of departments
- Is-a
  - Belongs to, refers to the parent class

#### Abstract Classes (Related to Interfaces)

**Definition**: Classes that do not define any functionality but they define functions that will be called

**Example 1**: Polygon is an abstract class

```python
class Polygon:
    def get_num_sides():
        pass

class Square(Polygon):
    def get_num_sides():
        return 4

class Triangle(Polygon):
    def get_num_sides():
        return 3
```

#### Multiple Inheritance

```python
class Sphere:
    def __init__(self, radius):
        self.radius = radius

    def get_radius(self):
        return self.radius

class Ball:
    def bounce():
        pass

class Football(Ball): # single inheritance
    pass

class Basketball(Ball, Sphere): # multiple inheritance
    # will inherit radius & get_radius() from Spehere and bounce() from Ball
    pass
```
