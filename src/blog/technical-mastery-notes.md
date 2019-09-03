---
title: "Technical Mastery Notes"
date: "2019-08-08"
---


####Overview

Technical mastery is a lecture series at Lambda School that teaches whiteboarding skills.

####Sets

**Definition**: Sets are data structures that allow you to store unqiue values of any type.

Sets are similiar to objects but rather than containing key value pairs, sets only contain keys. Elements in a set are not store in order which is the opposite of an array. Sets are similiar to objects where every key is unique (e.g. no duplicate keys are allowed).

---

###Problem Set

####Problame 1: Find the Smallest Missing Element from a Sorted Array

Given a sorted array of distinct non-negative integers, find the smallest missing element in it.

**Examples**

_Input:_ `A = [0, 1, 2, 6, 9, 11, 15]`
_Output:_ The smallest missing element is 3

_Input:_ `A = [1, 2, 3, 4, 6, 9, 11, 15]`
_Output:_ The smallest missing element is 0

_Input:_ `A = [0, 1, 2, 3, 4, 5, 6]`
_Output:_ The smallest missing element is 7

When an array is sorted and you are searching for something in the data binary search is optimal.

If a array is sorted of distinct non-negative integers then the value at index i will be i.

- E.g. A = [0,1,2,3,...,i] notice that index 0 is 0, index 1 is 1, ... etc.

**Rock, Paper, Scissors**
