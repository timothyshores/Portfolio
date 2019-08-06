---
title: "Intro To Python"
date: "2019-08-05"
---

#Intro To Python

---

###Help

**Python**

```
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

```
if (2 > 1) {
    console.log('Two is greater than one)
}
```

**Python**

```
if 2 > 1:
    print('Two is greater than one)
```

### Arrays

**Javascript**

```
const nums = [1,2,3]
console.log(nums[0]); // returns 1
console.log(numers.length); // returns 3
```

**Python**

```
nums = [1,2,3]
print(nums[0]) # returns 1
print(nums[0:2]) # returns [1,2]
print(len(nums)) # returns 3
```

### Loops

**Javascript**

```
for (let i = 0; i < 10; i++)
{
    console.log(i);
}
```

**Python**

```
for num in range(10):
    print(num)
```

###Objects / Dictionary

**Javascript**

```
const e = {
    "foo": 12,
    "bar": [1,2,3]
}
console.log(e.foo); // returns 12
```

**Python**

```
const e = {
    "foo": 12,
    "bar": [1,2,3]
}
print(e["foo"]) # returns 12
for i in e:
    print(i) # returns foo on line 1 and then bar on line 2
```

###List Comprehensions

**Python**

_Challenge: Find the even numbers in `nums` and store the result in `events`_

```
nums = [1, 5, 8, 12, 4, 7, 6, 2]
evens = []
```

_For Loop Solution_

```
for num in nums:
    if num % 2 == 0: # if num is even
        evens.append(n)
```

_List Comprehension Solution_

```
evens = [num for num in nums if n % 2 == 0]
```

###Tuple

- **Definition**: A tuple is an immutable list

```
a = ("foo", 1, "bar", 2);

```

###Functions

- Parameters are the variable names in a function definition while arguements refers to the data being passed into the function
  - In the example below x & y are parameters while 1 & 2 are the arguements
- Function parameters are locally scoped

```
def sum(x, y)
    return x + y

print(sum(1, 2)) # returns 3
print(x) # returns NameError: name 'x' is not defined
```

###Scope

**Without global variable**

```
x = 10

def foo(y)
    x = 5
    return x + y

print(foo(2)) # returns 7
print(a) # returns 10

```

**With Gloabl variable**

```
x = 10

def foo(y)
    global x
    x = 5
    return x + y

print(foo(2)) # returns 7
print(a) # returns 5

```

```
def foo(x):
    total = 0

    def bar(y):
        total += y

    return total

print foo(2) # returns UnboundLocalError: local variable 'total' referenced before assignment
```

```
def foo(x):
    total = 0

    def bar(y):
        nonlocal total
        total += y

    return total

print foo(20) # returns 190
```

###Named Arguements

```
def foo(x, y, x)
    print(x, y, z)

foo(z=1, y=2, x=3) # returns 3 2 1
```

**\*args**

- \*args allows a function to take any number of inputs

```
def sum(count, *args)
    print(count)
    print(args)

sum(1,2,3) # returns 3 on line 1 and then (1,2,3) on line 2
```

```
def sum(count, *args)
    a = 0

    for i in args:
        a += i

    return a

sum(1,2,3) # returns 6
```

```
def sum(count, *args)
    a = 0

    for i in args:
        a += i

    return a

sum(1,2,3) # returns 6
```

**\*\*kwargs**

```
def foo(**kwargs):
    print(kwargs)

print(x=10, y=20) # returns a dictionary {'x': 10, 'y', 20}
```

###Classes

- Classes have inheritance, constructors, data storage and have methods

```
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
