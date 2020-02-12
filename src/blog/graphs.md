---
title: "Graphs"
date: "2019-11-4"
---

# Graphs

---

**Real World Examples**
- Social networks - how friends are related to each other on Facebook
- Traffic road maps
- Flights between airports

**What makes a network**
- Connections or edges between nodes or vertices 

**Definition**

- Graphs are a collection of related data. They are similar to trees but connections can be made from between any nodes. There's no parent children relationship.

**Terminology**

- Nodes in a graph are called a vertex and connections between the vertexes also called vertices are called edges.

**Directed verses Undirected Graphs**

- Directed graphs are like one way roads while undirected graphs are like two way roads
- Example a graph with two nodes and one edge.
  - If you can travel back and forth between nodes then that graph is undirected
  - If you can only travel from Node A to Node B but can not travel from Node B to Node A then that graph is directed

---
**_Example_**: A directed graph with two nodes. You can traverse from A to B but can not traverse from B to A.

**Adjacency List**
```python
class Graph:
    def __init__(self):
        self.vertices = {
                            "A": {"B"}
                            "B": {}
            }
```

**Adjacency Graph**

 _ |  A |  B
---------|----------|---------
 **A** |  | 0
 **B** | 1 | 

---

**_Example_**: An undirected graph with two nodes. You can traverse from nodes A to B and also from nodes B to A.

**Adjacency List**
```python
class Graph:
    def __init__(self):
        self.vertices = {
                            "A": {"B"}
                            "B": {"A"}
            }
```
**Adjacency Graph**

 _ |  A |  B
---------|----------|---------
 **A** |  | 1
 **B** | 1 | 

---

**Sets**

- Data structure that stores collection of unique elements. 
  - Duplicates are not allowed in a set
- Sets are denoted with curly brackets `{}` in Python
- Sets are similar to dictionaries but rather than storing key value pairs they only have keys.
- Sets have no order and are really efficient for looking up if a specific value is contained within the set.


**Impementing a Graph in Python**

```python
from util import Stack, Queue 

class Graph:
    # Represent a graph as a dictionary of vertices mapping labels to edges
    def __init__(self):
        self.vertices = {}

    # Add a vertex to the graph.
    def add_vertex(self, vertex_id):
        self.vertices[vertex_id] = set()

    # Add a directed edge to the graph.
    def add_edge(self, v1, v2):
        if v1 in self.vertices and v2 in self.vertices:
            self.vertices[v1].add(v2)

    # Get all neighbors (edges) of a vertex.
    def get_neighbors(self, vertex_id):
        return self.vertices[vertex_id]

    # Print each vertex in breadth-first order beginning from starting_vertex
    def bft(self, starting_vertex):
        # make a queue
        queue = Queue()
        # make a set for the visited nodes
        visited = set()

        # put our starting node in line
        queue.enqueue(starting_vertex)

        # if our queue's not empty, we have more people to visit!
        while queue.size() > 0:
            # get the next node out of line
            current_node = queue.dequeue()

            # check if it has been visited
            if current_node not in visited:
                # if not, mark as visited
                visited.add(current_node)
                print(current_node)
                # and get its neighbors
                edges = self.get_neighbors(current_node)
                # put them in line to be visited
                for edge in edges:
                    queue.enqueue(edge)

    # Print each vertex in depth-first orde beginning from starting_vertex.
    def dft(self, starting_vertex):
        # make a stack
        stack = Stack()
        # make a set for the visited nodes
        visited = set()

        # put our starting node on top of the stack
        stack.push(starting_vertex)

        # if our stack's not empty, we have more people to visit!
        while stack.size() > 0:
            # get the next node off the top of our stack
            current_node = stack.pop()

            # check if it has been visited
            if current_node not in visited:
                # if not, mark as visited
                visited.add(current_node)
                print(current_node)
                # and get its neighbors
                edges = self.get_neighbors(current_node)
                # stack them on the stack to be visited
                for edge in edges:
                    stack.push(edge)
```