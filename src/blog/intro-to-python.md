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
