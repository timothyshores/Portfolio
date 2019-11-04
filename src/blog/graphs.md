---
title: "Graphs"
date: "2019-11-4"
---

# Graphs

---

**Definition**

- Graphs are a collection of related data. They are similiar to trees but connections can be made from between any nodes. There's no parent children relationship.

**Terminology**

- Nodes in a graph are called a vertex and connections between the vertexes also called verticies are called edges.

**Directed verses Undirected Graphs**

- Directed graphs are like one way roads while undirected graphs are like two way roads
- Example a graph with two nodes and one edge.
  - If you can travel back and forth between nodes then that graph is undirected
  - If you can only travel from Node A to Node B but can not travel from Node B to Node A then that graph is directed

**Adjacency List**

**_Example_**: A directed graph with two nodes. You can traverse from A to B but can not traverse from B to A.

```
class Graph:
    def __init__(self):
        self.vertices = {
                            "A": {"B"}
                            "B": {}
            }
```

**_Example_**: An undirected graph with two nodes. You can traverse from nodes A to B and also from nodes B to A.

```
class Graph:
    def __init__(self):
        self.vertices = {
                            "A": {"B"}
                            "B": {"A"}
            }
```

**Sets**

- Sets are denoted with curley brackets `{}`
- Sets are similiar to dictionaries but rather than storing key value pairs they only have keys.
- Sets have no order and are really efficient for looking up if a specfic value is contained within the set.
