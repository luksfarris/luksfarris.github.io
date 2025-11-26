---
layout: post
title: "Algorithms & Data Structures"
date: 2025-09-12 12:00:00 +0100
author: Lucas Farris
categories: software-engineering
permalink: /algorithms
---

* Do not remove this line (it will not be displayed)
{:toc}


----

### Intro

I haven't *really* ever applied to any "big tech" companies before.

Once (I think around 2017) I was approached by a facebook recruiter on Linkedin for a job in London, and he sent me a link to a coding challenge that I failed. I was at the time developing iOS apps, and decided to write the challenge using Swift, but their Swift compiler wasn't working. I spent all of my time trying to get it to work, thinking I must have been doing something wrong. Since then (mostly motivated by this fiasco) I gained a lot of xp in a coding challenge website called [codewars](https://www.codewars.com/users/luksfarris), where I stand in the top 5%.  

This month however, I decided to do a few interviews to practice. I believe it's important to interview often: to practice being in stressful situations, and learn to match the expectations of different companies. One of those companies I applied required a coding test of Data Structures and Algorithms.

In this post I will cover my training for the first real challenge of their interview process, the coding challenge. I will post my solution to each of the study areas and sample problems they share on their public blogs.

Each code block I wrote while timing myself to a max of 45 minutes. All code was written thinking of Python3.12, no standard libraries. I tried writing on a notepad, but ran them over the interpreter before posting, to make sure they were correct. Each implementation comes with a test main loop. I'm not including imports for brevity. Some comments I'm leaving as they were part of my thought process.

Here are some general resources I was provided with or found useful:
- [Example Google Code Interview](https://youtu.be/XKu_SEDAykw)
- [A post from 2008 about how to prepare for a coding interview](https://steve-yegge.blogspot.com/2008/03/get-that-job-at-google.html)
- [Another example code interview](https://youtu.be/Ti5vfu9arXQ) - in this one, the guy makes many mistakes (at least 3), but the lady's happy with his solution

### Basic Math

#### Probability

Probability is assigned to certain repeatable events. The probability $P (E)$ of an event E is a measure of the relative frequency with which those events occur. It is therefore a number lying between $0$ and $1$. If it is equal to $0$, that means the event cannot occur at all. If it is $1$, that means it is certain. For example, if you toss a coin in the air, it will presumably land ‘heads’ exactly as often as it lands ‘tails’, so the probability of either event is $\frac{1}{2}$. If you throw a single die, the probability of any one of the 6 faces coming out on top is $\frac{1}{6}$.

There are three basic rules which tell us how to compute the probability of more complicated events without a great deal of trouble.
- **Complementarity**. If $E$ is an event with probability $P(E)$, then the probability that $E$ doesn’t occur is $1 − P(E)$.
- **Sum**. If $E$ and $F$ are two events which cannot occur simultaneously, then the probability that either $E$ or $F$ occurs is $P (E) + P (F)$.
- **Product**. If $E$ and $F$ are two independent events, then the probability that both occur is $P(E) * P(F)$

#### Binomial coefficient - "n choose k"

${N\choose k}$ means the number of ways you can choose an unordered subset of $k$ elements from a fixed set of $n$ elements. The formula is:

$${N\choose k} = \frac{n!}{k!(n-k)!}$$

For example ${4\choose 2}$ is 6. In Python we can get all subsets of a list in the following way:

```python
from itertools import combinations
print(list(combinations(range(4), 2)))
# [(0, 1), (0, 2), (0, 3), (1, 2), (1, 3), (2, 3)]
```

To get all combinations of all sizes $k$ (also known as a power set), you can iterate $k$ from $1$ to $n$.

If you want elements to be repeated, you can use:

```python
from itertools import product
print(list(product(range(4), repeat=2)))
# [(0, 0), (0, 1), (0, 2), (0, 3), (1, 0), (1, 1), (1, 2), (1, 3), (2, 0), (2, 1), (2, 2), (2, 3), (3, 0), (3, 1), (3, 2), (3, 3)]
```

Similarly, you can also get all `permutations` of a list with size K using the `repeat=k` parameter.

```python
from itertools import product
print([e for sublist in [list(product(range(3), repeat=k)) for k in range(4)] for e in sublist])
# [(), (0,), (1,), (2,), (0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2), (0, 0, 0), (0, 0, 1), (0, 0, 2), (0, 1, 0), (0, 1, 1), (0, 1, 2), (0, 2, 0), (0, 2, 1), (0, 2, 2), (1, 0, 0), (1, 0, 1), (1, 0, 2), (1, 1, 0), (1, 1, 1), (1, 1, 2), (1, 2, 0), (1, 2, 1), (1, 2, 2), (2, 0, 0), (2, 0, 1), (2, 0, 2), (2, 1, 0), (2, 1, 1), (2, 1, 2), (2, 2, 0), (2, 2, 1), (2, 2, 2)]
```

### Sorting

#### Merge Sort

Here's my implementation of merge sort - 15 minutes - $\mathcal{O}(n\log n)$

```python
def _merge_sort_merge(left: list, right: list):
    ordered_result = []
    i = 0; j = 0
    while i < len(left) and j < len(right): # until one of them runs out
        if left[i] < right[j]:
            ordered_result += [left[i]] # left is smaller
            i += 1
        else:
            ordered_result += [right[j]] # right is smaller
            j += 1
    if i == len(left):
        ordered_result += right[j:] # remainder right elements
    else:
        ordered_result += left[i:] # remainder left elements
    return ordered_result


def merge_sort(a_list: list) -> list:
    size = len(a_list)
    if size < 2:
        return a_list
    middle_ix = math.floor(size//2)
    left = merge_sort(a_list[:middle_ix])
    right = merge_sort(a_list[middle_ix:])
    return _merge_sort_merge(left, right)


if __name__ == "__main__":
    assert merge_sort([1,2,3]) == [1,2,3]
    assert merge_sort([3,2,1]) == [1,2,3]
    assert merge_sort([2,3,1]) == [1,2,3]
    assert merge_sort([2,3,-1]) == [-1,2,3]
    assert merge_sort([]) == []
    assert merge_sort([2,3,3,1]) == [1,2,3,3]
    assert merge_sort([2,2,3,3,1]) == [1,2,2,3,3]
    print('tests passed')
```

### Basic Data Structures

#### Queue, Stack, Priority Queue

This were just some quick and dirty implementations, I challenged myself to take less than 5 minutes in each.

```python
class Queue:
    """FIFO"""
    _queue: list
    def __init__(self):
        self._queue = []
    
    def insert(self, item: Any):
        self._queue.append(item)
    
    def pop(self) -> Any:
        size = len(self._queue)
        if size > 0:
            return self._queue.pop(0)

class Stack:
    """FILO"""
    _stack: list
    def __init__(self):
        self._stack = []
    
    def insert(self, item: Any):
        self._stack.append(item)
    
    def pop(self) -> Any:
        size = len(self._stack)
        if size > 0:
            return self._stack.pop(size - 1)

from bisect import insort

class PriorityQueue:
    """Most important out first"""
    _sorted_queue: list

    def __init__(self):
        self._sorted_queue = []
    
    def insert(self, item: Any, priority: int):
        element = (priority, item)
        insort(self._sorted_queue, element, key=lambda e: e[0])
    
    def pop(self) -> Any:
        size = len(self._sorted_queue)
        if size > 0:
            return self._sorted_queue.pop(size - 1)[1]

if __name__ == "__main__":
    N = 5
    q = Queue()
    s = Stack()
    p = PriorityQueue()
    for i in range(N):
        q.insert(i)
        s.insert(i)
        p.insert(i, i)
    assert [q.pop() for _ in range(N)] == list(range(N))
    assert [s.pop() for _ in range(N)] == list(reversed(range(N)))
    assert [p.pop() for _ in range(N)] == list(reversed(range(N)))
    print('test passed')
```

#### Hash Table

Only lists are allowed, collisions need to be handled - 20 minutes - $\mathcal{O}(1^{*})$

```python
SIZE = 100_000

class Hashtable:

    def __init__(self) -> None:
        self.array: list[Any] = [[]] * SIZE
    
    def _hash(self, key: str) -> int:
        result = abs(hash(key)) % SIZE
        return result

    def set_value(self, key: str, value: Any) -> None:
        ix = self._hash(key)
        keys = self.array[ix]
        keys = [(k,v) for k,v in keys if k != key]
        keys += [(key,value)]
        self.array[ix] = keys

    def get_value(self, key: str) -> Any:
        ix = self._hash(key)
        keys = self.array[ix]
        found = next((k,v) for k,v in keys if k == key)
        if found:
            return found[1]


if __name__ == "__main__":
    ht = Hashtable()
    for i in range(1000):
        ht.set_value(str(i), i)
    for i in range(1000):
        assert ht.get_value(str(i)) == i
    print('test successful')
```

### Trees

#### Binary Search Tree

I didn't attempt to write these from memory. I followed CLRS, took me about 90 minutes to re-read the chapter and implement the routines my way.

```python
from typing import Any

class Node:
    value: Any
    parent: "Node"
    left: "Node"
    right: "Node"

    def __init__(self, value: Any, parent: "Node"):
        self.value = value
        self.parent = parent
        self.left = None
        self.right = None

class BinarySearchTree:
    root: Node

    def __init__(self, root_value: Any):
        self.root = Node(root_value, None)

    def in_order_dfs_walk(self, node: Node, result: list) -> list:
        """root in middle"""
        if node.left:
            self.in_order_dfs_walk(node.left, result)
        result += [node.value]
        if node.right:
            self.in_order_dfs_walk(node.right, result)
        return result
    
    def pre_order_dfs_walk(self, node: Node, result: list) -> list:
        """root first"""
        result += [node.value]
        if node.left:
            self.pre_order_dfs_walk(node.left, result)
        if node.right:
            self.pre_order_dfs_walk(node.right, result)
        return result
    
    def post_order_dfs_walk(self, node: Node, result: list) -> list:
        """root last"""
        if node.left:
            self.post_order_dfs_walk(node.left, result)
        if node.right:
            self.post_order_dfs_walk(node.right, result)
        result += [node.value]
        return result
    
    def bfs_traverse(self, root:Node) -> list:
        children = [root]
        result = []
        while children:
            # include the level
            result += [n.value for n in children]
            new_children = []
            for n in children:
                new_children += [n.left, n.right]
            children = [n for n in new_children if n is not None]
        return result
    
    def search(self, node: Node, value: Any) -> Node:
        if node.value == value:
            return node
        if value < node.value and node.left:
            return self.search(node.left, value)
        elif value > node.value and node.right:
            return self.search(node.right, value)
        else:
            return None
    
    def minimum(self, node: Node) -> Node:
        if node.left:
            return self.minimum(node.left)
        else:
            return node
    
    def maximum(self, node: Node) -> Node:
        if node.right:
            return self.maximum(node.right)
        else:
            return node
    
    def successor(self, node: Node) -> Node:
        if node.right:
            return self.minimum(node.right)
        else:
            # go up until we find a parent that branched left
            parent = node.parent
            while parent is not None and parent.right == node:
                node = parent
                parent = parent.parent
            return parent if parent else None
    
    def predecessor(self, node: Node) -> Node:
        if node.left:
            return self.maximum(node.left)
        else:
            # go up until we find a parent that branched right
            parent = node.parent
            while parent is not None and parent.left == node:
                node = parent
                parent = parent.parent
            return parent if parent else None

    def insert_leaf(self, node: Node, value: Any) -> Node:
        """returns the inserted leaf"""
        if value < node.value:
            if node.left:
                return self.insert_leaf(node.left, value)
            else:
                node.left = Node(value, node)
                return node.left
        if value >= node.value:
            if node.right:
                return self.insert_leaf(node.right, value)
            else:
                 node.right = Node(value, node)
                 return node.right

    def transplant(self, node: Node, target: Node):
        if node.parent is None: # root
            self.root = target
        elif node == node.parent.left: # left child
            node.parent.left = target
        else: # right child
            node.parent.right = target
        if target: # may be None
            target.parent = node.parent

    def delete_node(self, node: Node):
        if node.left is None: # no left - replace with right branch
            self.transplant(node, node.right)
        elif node.right is None: # no right - replace with left branch
            self.transplant(node, node.left)
        else: # both branches exist, find the successor to transplant
            successor = self.successor(node)
            if successor.parent is not node: # case when successor is further down
                self.transplant(successor, successor.right)
                successor.right = node.right
                successor.right.parent = successor
            self.transplant(node, successor)
            successor.left = node.left
            successor.left.parent = successor

if __name__ == "__main__":
    tree = BinarySearchTree(2)
    tree.transplant(tree.root, Node(2, None))
    assert tree.insert_leaf(tree.root, 1) is not None
    tree.transplant(tree.root.left, Node(1, None))
    assert tree.root.left.parent == tree.root
    assert tree.insert_leaf(tree.root, 4) is not None
    assert tree.insert_leaf(tree.root, 3) is not None
    assert tree.insert_leaf(tree.root, 5) is not None
    assert tree.in_order_dfs_walk(tree.root, []) == [1,2,3,4,5]
    assert tree.pre_order_dfs_walk(tree.root, []) == [2,1,4,3,5]
    assert tree.post_order_dfs_walk(tree.root, []) == [1,3,5,4,2]
    assert tree.bfs_traverse(tree.root) == [2, 1, 4, 3,5]
    for i in range(1,5):
        assert tree.search(tree.root, i).value == i
    assert tree.search(tree.root, 7) is None
    assert tree.minimum(tree.root).value == 1
    assert tree.maximum(tree.root).value == 5
    assert tree.successor(tree.root).value == 3
    assert tree.successor(tree.root.right.left).value == 4
    assert tree.successor(tree.root.right).value == 5
    assert tree.successor(tree.root.right.right) == None
    assert tree.predecessor(tree.root).value == 1
    assert tree.predecessor(tree.root.right.left).value == 2
    assert tree.predecessor(tree.root.right).value == 3
    assert tree.predecessor(tree.root.left) == None
    tree.delete_node(tree.root.left)
    tree.delete_node(tree.root.right)
    assert tree.in_order_dfs_walk(tree.root, []) == [2,3,5]
    print('test passed')
```

#### Trie

> Implement a trie build and search algorithms, for the following English words and values.
>
> {"a": 1,"to": 2,"tea": 3,"ted": 4,"ten": 5,"i": 5,"in": 6,"inn": 7}

Took me 22 minutes - search and insert are $\mathcal{O}(N)$

```python
class Node:
    ref: str
    value: int
    parent: "Node"
    children: list["Node"]

    def __init__(self, ref: str, value: Any, parent: "Node"):
        self.ref = ref
        self.value = value
        self.parent = parent
        self.children = []

class TrieTree:
    root: Node

    def __init__(self):
        self.root = Node('', None, None)

    def insert_leaf(self, node: Node, ix: int, word: str, value: int) -> Node:
        current_search = word[:ix]
        for c in node.children:
            if c.ref == word: # the word exists, return it without adding, but update its value
                c.value = value
                return c
            if c.ref == current_search: # found the branch, recursion
                return self.insert_leaf(c, ix+1, word, value)
        # branch does not exist
        if ix == len(word):
            new_node = Node(word, value, node)
            node.children += [new_node]
            return new_node
        else:
            new_node = Node(current_search, None, node)
            node.children += [new_node]
            return self.insert_leaf(new_node, ix+1, word, value)
    
    def search(self, node: Node, text: str) -> Node:
        for c in node.children:
            if c.ref == text:
                return c
            if text.startswith(c.ref):
                return self.search(c, text)
        return None


if __name__ == "__main__":
    tree = TrieTree()
    data = {"a": 1,"to": 2,"tea": 3,"ted": 4,"ten": 5,"i": 5,"in": 6,"inn": 7}
    for k,v in data.items():
        tree.insert_leaf(tree.root, 1, k, v)
    for k,v in data.items():
        assert tree.search(tree.root, k).value == v
    print('test passed')
```


#### AVL Tree - Balanced

For this one I spent a whole day reading about balanced trees, then decided the AVL tree was the best option to try out.
Implemented in 38 minutes - search and insert are $\mathcal{O}(\log n)$

```python
class Node:
    value: int
    height: int
    left: "Node"
    right: "Node"

    def __init__(self, value: int):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1
    
    def balance(self) -> int:
        balance = 0
        if self.left:
            balance += self.left.height
        if self.right:
            balance -= self.right.height
        return balance

    def update_height(self):
        left_height = self.left.height if self.left else 0
        right_height = self.right.height if self.right else 0
        self.height = max(left_height, right_height) + 1

class AVLTree:
    
    root: Node

    def __init__(self, root_value: int):
        self.root = Node(root_value)

    def insert(self, node: Node, value: int):
        if node is None:
            return Node(value)
        if value < node.value:
            node.left = self.insert(node.left, value)
        else:
            node.right = self.insert(node.right, value)
        node.update_height()
        balance = node.balance()
        
        if balance > 1 and node.left.balance() > 0: # LL
            return self.rotate_right(node)
        elif balance > 1 and node.left.balance() < 0: # LR
            node.left = self.rotate_left(node.left)
            return self.rotate_right(node)
        elif balance < -1 and node.right.balance() < 0: # RR
            return self.rotate_left(node)
        elif balance < -1 and node.right.balance() > 0: # RL
            node.right = self.rotate_right(node.right)
            return self.rotate_left(node)
        else:
            return node

    def rotate_right(self, node: Node) -> Node:
        new_head = node.left
        tmp_node = new_head.right
        new_head.right = node
        node.left = tmp_node
        node.update_height()
        new_head.update_height()
        if node == self.root:
            self.root = new_head
        return new_head
    
    def rotate_left(self, node: Node) -> Node:
        new_head = node.right
        tmp_node = new_head.left
        new_head.left = node
        node.right = tmp_node
        node.update_height()
        new_head.update_height()
        if node == self.root:
            self.root = new_head
        return new_head
    
    def search(self, node: Node, value: int) -> Node:
        if not node:
            return None # node not found in tree
        elif node.value == value:
            return node # found node
        elif value < node.value:
            return self.search(node.left, value)
        else:
            return self.search(node.right, value)

if __name__ == "__main__":
    tree = AVLTree(1)
    N = 500
    for i in range(2, N):
        tree.insert(tree.root, i)
    assert tree.root.height <= math.ceil(math.log(N+2, 2)), "balance didn't work"
    assert tree.search(tree.root, 0) is None
    assert tree.search(tree.root, N) is None
    for i in range(1,N):
        assert tree.search(tree.root, i).value == i, "insert is not correct"
    print('test successful')
```

I implemented this on a notepad first. Here are the silly mistakes I made, which were easily fixed:
- `self` was not used in calling recursion for `insert`
- `Node` was capitalized (i.e. the class instead of variable) on one of search conditions
- inverted comparison (`>` instead of `<`) in first value comparison of search
- forgot to update `root`

### Graphs

I didn't really time myself here, or use notepad. I did these straight up on vscode because I almost haven't had to use graphs since the university. I wanted to implement the three representations, and BFS complexity in each.

#### Representations - Pointers

Graph holds a list of vertices and edges. Both can be weighed. Given the list of edges, BFS is simply iterating that sorted list, so the complexity would be $\mathcal{O}(E\log E)$


```python
class Node:
    weight: int

    def __init__(self, weight: int):
        self.weight = weight

class Edge:
    source: Node
    target: Node
    weight: int

    def __init__(self, source: Node, target: Node, weight: int):
        self.source = source
        self.target = target
        self.weight = weight

class DirectedGraph:
    nodes: list[Node]
    edges: list[Edge]

    def __init__(self):
        self.nodes = []
        self.edges = []

    def add_node(self, node: Node):
        self.nodes += [node]
    
    def connect(self, source: Node, target: Node, weight: int = 0):
        self.edges.append(Edge(source,target,weight))

    
    def compare_edges(self, edge: Edge):
        return (self.nodes.index(edge.source), self.nodes.index(edge.target))
        
    def bfs(self, source: Node):
        # if we sort the edges based on (src_ix, tgt_ix), bfs would be that list
        bfs_order = sorted(self.edges, key=self.compare_edges) # n log n
        for i in range(len(bfs_order)):
            if bfs_order[i].source == source:
                break
        visit_list = bfs_order[i:]
        visited_nodes = []
        for edge in visit_list:
            if edge.source not in visited_nodes:
                visited_nodes.append(edge.source)
            if edge.target not in visited_nodes:
                visited_nodes.append(edge.target)
        return visited_nodes

if __name__ == "__main__":
    g = DirectedGraph()
    N = 1000
    for i in range(N):
        g.add_node(Node(i))
    for i in range(0,N-1):
        g.connect(g.nodes[i], g.nodes[i+1], 1)
    assert [n.weight for n in g.bfs(g.nodes[0])] == list(range(N))
    assert [n.weight for n in g.bfs(g.nodes[2])] == list(range(2,N))
    g.connect(g.nodes[0], g.nodes[-1], 1)
    assert [n.weight for n in g.bfs(g.nodes[0])] == [0,1,N-1,*range(2,N-1)]
    print('it works')
```

#### Representations - Matrix

Graph holds an $N\times N$ matrix, where cells are the weight of the edge. BFS here would be $\mathcal{O}(V + E)$.

The trick to BFS is the queue: visiting a node is popping from the the queue, and adding back to it the unvisited children of the visited node. Repeat until queue is empty.

```python
class Graph:

    adjacency: list[list[int]]
    n_nodes: int
    
    def __init__(self, n_nodes: int):
        self.n_nodes = 0
        self.adjacency = []
        for _ in range(n_nodes):
            self.add_node()
    
    def add_node(self):
        self.n_nodes += 1
        for row in self.adjacency:
            row += [None] # add a new column
        self.adjacency += [[None] * self.n_nodes] # add a new row
    
    def connect(self, row: int, col: int, weight: int):
        assert row >= 0 and col >= 0
        assert row < self.n_nodes and col < self.n_nodes
        self.adjacency[row][col] = weight

    def bfs(self, node_ix: str) -> list:
        queue: list = []
        visited: list = []
        if node_ix >= self.n_nodes or node_ix < 0:
            return visited
        queue.append(node_ix)
        while len(queue) > 0:
            next_node = queue.pop(0) # visit a node
            visited.append(next_node)
            edges = self.adjacency[next_node] # record every unvisited node
            for node in range(len(edges)):
                if edges[node] is not None and node is not visited:
                    queue.append(node)
        return visited

if __name__ == "__main__":
    g = Graph(3)
    assert g.adjacency == [[None,None,None],[None,None,None],[None,None,None]]
    g.connect(0,1,2)
    g.connect(1,2,3)
    assert g.adjacency == [[None,2,None],[None,None,3],[None,None,None]]
    N = 1000
    g = Graph(N)
    for i in range(N-1):
        g.connect(i, i+1, 7)
    assert g.bfs(0) == list(range(N))
    print('tests passed')
```

#### Representations - Adjacency List

This representation keeps a map of every node and its connections. This means finding info about a node takes $\mathcal{O}(1)$. BFS here would be $\mathcal{O}(V + E)$, since we need to iterate all connections of all nodes. I used the same queue trick as before.

```python
class Graph:
    adjacency: dict[str, set[str]]

    def __init__(self):
        self.adjacency = {}
    
    def add_node(self, node: str):
        self.adjacency[node] = set()

    def connect(self, source: str, target: str):
        if source not in self.adjacency:
            self.add_node(source)
        if target not in self.adjacency:
            self.add_node(target)
        self.adjacency[source].update(target)
    
    def bfs(self, node: str):
        nodes = list(self.adjacency.keys())
        visited = []
        if node not in nodes:
            return visited
        queue: list = [node]
        visited.append(node)
        while len(queue) > 0:
            # pop the queue visit all unvisited nodes, add them back to the queue
            next_node = queue.pop(0)
            edges: set = self.adjacency[next_node]       
            for e in edges:
                if e not in visited:
                    visited.append(e)
                    queue.append(e)
                # we can ignore visited nodes
        return visited   

if __name__ == "__main__":
    g = Graph()
    g.connect('a', 'b')
    g.connect('b', 'c')
    assert g.adjacency == {'a': {'b',}, 'b':{'c',}, 'c': set()}
    print('tests passed')
    g.connect('c', 'd')
    g.connect('d', 'e')
    g.connect('d', 'f')
    assert g.bfs('a') == ['a','b','c','d','e', 'f']
```

#### Connectivity

To check if two nodes are connected, one could run BFS from `source` and check if `target` is in the result. Similarly, one could check if the graph is disjoint by checking if the result of BFS contains all nodes.

#### Cycle Detection

To detect cycles, one would need to implement DFS. If at any point an edge connects to a node that was already visited, the graph has a cycle.


#### Dijkstra's Algorithm (Shortest Path)

Started from the previous code, implemented in 25 minutes and 22 seconds. The time complexity for Dijkstra is $\mathcal{O}(E \log V)$ since we visit every edge once and track the vertices in a hashmap. This implementation will only work on acyclic graphs, and it will break if the graph is too large, due to the python recursion limit.


```python
class Node:
    weight: int

    def __init__(self, weight: int):
        self.weight = weight

class Edge:
    source: Node
    target: Node
    weight: int

    def __init__(self, source: Node, target: Node, weight: int):
        self.source = source
        self.target = target
        self.weight = weight

class DirectedAcyclicGraph:
    nodes: list[Node]
    edges: list[Edge]

    def __init__(self):
        self.nodes = []
        self.edges = []

    def add_node(self, node: Node):
        self.nodes += [node]
    
    def connect(self, source: Node, target: Node, weight: int = 0):
        self.edges.append(Edge(source,target,weight))

    def dijkstra(self, source:Node, target:Node, track: dict) -> dict:
        # start from source, move to shortest distance
        # keep track of each target + how you got there + how long it took to get there
        # track = {B: (A, 999)}
        if track == {}:
            track[source] = (None, 0)
        if source == target:
            return track # reached the end
        edges = [e for e in self.edges if e.source == source]
        edges.sort(key=lambda e: e.weight)
        for e in edges:
            travel_distance = track[source][1] + e.weight
            # if the new distance is shorter than the previously recorded one
            if e.target not in track or track[e.target][1] > travel_distance:
                track[e.target] = (source, travel_distance)
            track = self.dijkstra(e.target, target, track)
        return track

if __name__ == "__main__":
    g = DirectedAcyclicGraph()
    N = 500 # can't go too crazy with the recursion limit
    for i in range(N):
        g.add_node(Node(i))
    for i in range(0,N-1):
        g.connect(g.nodes[i], g.nodes[i+1], 1)
    g.connect(g.nodes[0], g.nodes[-1], N)
    track = g.dijkstra(g.nodes[0], g.nodes[-1], {})
    assert track[g.nodes[-1]][1] == N-1
    g.connect(g.nodes[N//2], g.nodes[-1], 1)
    track = g.dijkstra(g.nodes[0], g.nodes[-1], {})
    assert track[g.nodes[-1]][1] == (N//2) + 1
    print('tests passed')
```

#### A-Star (Shortest Path with a heuristic)

This one took me 15 minutes and 50 seconds, starting from the Dijkstra implementation.
I would suppose it also has a complexity of $\mathcal{O}(V^2)$, but the literature I found expresses it in terms of the depth of the shortest path $d$, and the "branching factor" $b$, $\mathcal{O}(d*b)$, which could be V-squared, but could be less.

```python
class Node:
    x: int
    y: int

    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y

class Edge:
    source: Node
    target: Node
    distance: int

    def __init__(self, source: Node, target: Node, distance: float):
        self.source = source
        self.target = target
        self.distance = distance

def distance_heuristic(source: Node, target: Node) -> float:
    # euclidean
    return math.sqrt(((target.x - source.x)**2) + ((target.y - source.y)**2))

class DirectedGraph:
    nodes: list[Node]
    edges: list[Edge]

    def __init__(self):
        self.nodes = []
        self.edges = []

    def add_node(self, node: Node):
        self.nodes += [node]
    
    def connect(self, source: Node, target: Node, distance: float):
        self.edges.append(Edge(source,target,distance))
    
    def a_star(self, source:Node, target:Node, track: dict) -> dict:
        # start from source, move to best possible neighbor according to heuristic
        # keep track of each target + how you got there + how long it took to get there
        # track = {B: (A, 123.45)}
        track = track or {source: (None, 0)}
        if source == target:
            return track # reached the end
        edges = [e for e in self.edges if e.source == source]
        edges.sort(key=lambda e: (e.distance + distance_heuristic(e.target, target))) # most promising path
        for e in edges:
            travel_distance = track[source][1] + e.distance
            # if the new distance is shorter than the previously recorded one
            if e.target not in track or track[e.target][1] > travel_distance:
                track[e.target] = (source, travel_distance)
            track = self.a_star(e.target, target, track)
            if target in track:
                return track # if we found the target, we can greedily stop
        return track

if __name__ == "__main__":
    g = DirectedGraph()
    N = 500 # can't go too crazy with the recursion limit
    for i in range(N):
        g.add_node(Node(i,i))
    for i in range(0,N-1):
        g.connect(g.nodes[i], g.nodes[i+1], distance_heuristic(g.nodes[i], g.nodes[i+1])+5) # +5 so the heuristic is not exact (simulate a road with curves)
    track = g.a_star(g.nodes[0], g.nodes[-1], {})
    expected_distance = (N-1) * (5+math.sqrt(2))
    assert math.isclose(track[g.nodes[-1]][1], expected_distance, abs_tol=0.1)
    print('tests passed')
```


#### Traveling Salesman Problem + Minimum Spanning Tree

> Given a fully connected graph on N nodes, calculate the shortest tour from a node - visit every node and get back.

Started this one from scratch, no IDE, to test myself. This one took me 40 minutes and 15 seconds because I spend a long time trying to remember Kruskal's algorithm. This was a high pressure test for me. When I tried to run the code after finishing, I had made 3 mistakes:

- forgot `self` in the edges references of the `pre_order_dfs`
- confused `sort` with `sorted`
- forgot to assign the result of the recursion of `pre_order_dfs` back to `tour`

The ideal complexity of Kruskal is sorting the edges $\mathcal{O}(e\log e)$. The DFS on the tree would be $\mathcal{O}(n)$ since we're looking at each node once. The TSP measuring the tour would take $\mathcal{O}(n)$. So the final complexity would be $\mathcal{O}(e\log e)$.

I think my implementation is not there yet.

```python
class Node:
    value: int

    def __init__(self, value: int):
        self.value = value

class Edge:
    source: Node
    target: Node
    distance: float

    def __init__(self, source: Node, target: Node, distance: float):
        self.source = source
        self.target = target
        self.distance = distance

class Graph:
    nodes: list[Node]
    edges: list[Edge]

    def __init__(self):
        self.nodes = []
        self.edges = []
    
    def add_node(self, node: Node):
        self.nodes.append(node)
    
    def connect(self, source: Node, target: Node, distance: float):
        self.edges.append(Edge(source, target, distance))
    
    def kruskal_min_spanning_tree(self) -> "Graph": 
        result = Graph()
        sets = []
        for node in self.nodes:
            sets.append({node,})
        sorted_edges = sorted(self.edges, key=lambda e: e.distance)
        for edge in sorted_edges:
            source_set = next(s for s in sets if edge.source in s)
            target_set = next(s for s in sets if edge.target in s)
            if source_set != target_set:
                source_set = sets.pop(sets.index(source_set))
                target_set = sets.pop(sets.index(target_set))
                if edge.source not in result.nodes:
                    result.add_node(edge.source)
                if edge.target not in result.nodes:
                    result.add_node(edge.target)
                result.connect(edge.source, edge.target, edge.distance)
                sets.append(source_set.union(target_set))
        return result


    def pre_order_dfs(self, node: Node, tour: list[Node]) -> list[Node]:
        valid_edges = [e for e in self.edges if e.source == node]
        if not valid_edges: # reached leaf
            return tour + [node]
        for e in self.edges:
            if e.target not in tour:
                tour = self.pre_order_dfs(e.target, tour)
                tour += [node]
        return tour


    def tsp(self, node: Node) -> int:
        # pre-order dfs on min spanning tree
        tree = self.kruskal_min_spanning_tree()
        tour = [node] + tree.pre_order_dfs(node, [])
        total_distance = 0
        for i in range(len(tour)-1):
            distance = next(e for e in self.edges if e.source == tour[i] and e.target == tour[i+1]).distance
            total_distance += distance
        return total_distance
        
def fully_connected_graph(size: int):
    g = Graph()
    for i in range(size):
        g.add_node(Node(i))
    for i in range(size):
        for j in range(size):
            if i != j:
                g.connect(g.nodes[i], g.nodes[j], i+j)
    return g

if __name__ == "__main__":
    for N in [5, 8, 100]:
        g = fully_connected_graph(N)
        assert g.tsp(g.nodes[0]) == 2 * sum(range(N))
    print('test passed')
```

### Dynamic Programming

#### Knapsack Problem

I took this description from [codewars](https://www.codewars.com/kata/5c2256acb26767ff56000047):

> You get a list of items and an integer for the limit of total weights (w_limit). Each item is represented by (weight, value)
> Return the list of maximum total value with the sorted lists of all lists of values that are also sorted.
> i.e.  [ max_value, sorted_list( sorted_list A ,sorted_list B, ... )  ]

The test case I tried to solve was this:

```
# (4, 12), (2, 1), (10, 4)
# 6

# -| 0 1 2 3  4  5  6
# -| ---------------
# -| 0 0 0 0  0  0  0
# 1| 0 0 0 0 12 12 12
# 2| 0 0 1 1 12 12 13
# 3| 0 0 1 1 12 12 13
```

I implemented my solution on a notepad, in about 23 minutes, and I made one mistake: flipped the inequality sign on the `build_matrix` method. This solution checks every item and every weigth, so it's $\mathcal{O}(n * w)$.

```python
def build_matrix(items: list[tuple[int, int]], w_limit: int) -> list[list[int]]:
    n_items = len(items)
    matrix = [[0] * (w_limit+1) for _ in range(n_items+1)] # 0-filled matrix
    for item_ix in range(1,n_items+1):
        current_item = items[item_ix-1]
        for weight in range(1,w_limit+1):
            value_above = matrix[item_ix-1][weight]
            if current_item[0] > weight:
                matrix[item_ix][weight] = value_above
            else:
                matrix[item_ix][weight] = max(value_above, current_item[1] + matrix[item_ix-1][weight - current_item[0]])
    return matrix

def walk_matrix(matrix:list[list[int]], items: list[tuple[int, int]]):
    row = len(matrix) - 1
    col = len(matrix[-1]) - 1
    cell = matrix[row][col] # start from the last element
    total_value = cell
    picked_values = []
    if cell == 0:
        return (0, [])
    while cell > 0:
        if matrix[row-1][col] == cell: # if value above is equal, we didn't pick up this item
            row = row - 1
        else: # if the cell above is lower, means we picked up this item
            item_picked = items[row-1]
            row = row - 1
            col = col - item_picked[0]
            picked_values += [item_picked[1]]
        cell = matrix[row][col]
    return total_value, picked_values
    

def knapsack(items,w_limit):
    matrix = build_matrix(items, w_limit)
    result = walk_matrix(matrix, items)
    return result

if __name__ == "__main__":
    assert knapsack([(4, 12), (2, 1), (10, 4)], 6) == (13, [1, 12])
    print('test passed')
```

I had to read about this problem again to remember why it was $\mathcal{NP}$-complete. It's evident when you think that as you increase $w$, the matrix grows exponentially.


### Linear Programming

> A store has requested a manufacturer to produce pants and sports jackets.
> 
> For materials, the manufacturer has $750 m ^2$ of cotton textile and $1000 m^2$ of polyester. Every pair of pants (1 unit) needs $1 m^2$ of cotton and $2 m ^2$ of polyester. Every jacket needs $1.5 m ^2$ of cotton and $1 m^2$ of polyester. The price of the pants is fixed at \\$50 and the jacket, \\$40. What is the number of pants and jackets that the manufacturer must give to the stores so that these items obtain a maximum sale? - [Ref](https://www.superprof.co.uk/resources/academic/maths/linear-algebra/linear-programming/linear-programming-examples.html)

Decided to use `pulp` because I like the syntax. Took me about 20 minutes to work it out on an IDE.

Here are my notes:
- $cotton\leq 750$
- $polyester\leq 1000$
- $n_{pants} = cotton + 2\,polyester$
- $n_{jackets} = 1.5\,cotton + polyester$
- $sale = 50\,n_{pants} + 40\,n_{jackets}$



```python
model = LpProblem(name="manufacturer", sense=LpMaximize)
# decision variables must be integers, can't produce partial clothes
n_pants = LpVariable(name="n_pants", lowBound=0, cat=const.LpInteger)
n_jackets = LpVariable(name="n_jackets", lowBound=0, cat=const.LpInteger)
# rework equations to form the inequalities
cotton_constraint = (n_pants) + (1.5 * n_jackets) <= 750
polyester_constraint = (n_pants * 2) + (n_jackets) <= 1000
model += (cotton_constraint, "cotton_constraint")
model += (polyester_constraint, "polyester_constraint")
# objective
sales = (n_pants * 50) + (n_jackets * 40)
model += sales
print(model)
status = model.solve()
assert {v.name: v.value() for v in model.variables()} == {'n_jackets': 250.0, 'n_pants': 375.0}
print('test passed')
```
This is what the model printed:

```
manufacturer:
MAXIMIZE
40*n_jackets + 50*n_pants + 0
SUBJECT TO
cotton_constraint: 1.5 n_jackets + n_pants <= 750

polyester_constraint: n_jackets + 2 n_pants <= 1000

VARIABLES
0 <= n_jackets Integer
0 <= n_pants Integer
```


### Problems From Google's Prep Guide

Sample interview questions at [Software Engineer (SWE) interview prep guide](https://www.google.com/about/careers/applications/candidate-prep/swe)

#### Longest Word

Find the longest word that is contained in a given string. No reordering allowed. - 20 minutes - $\mathcal{O}(n * W)$

```python
class Node:
    letter: str
    next: "Node" = None

    def __init__(self, c: str):
        self.letter = c

def build_linked_list(s: str):
    nodes = [Node(c) for c in s]
    for i in range(len(nodes)-1):
        nodes[i].next = nodes[i+1]
    return nodes[0]

def check_graph(node: Node, w: str) -> bool:
    if len(w) == 0: # no more characters
        return True
    c = w[0]
    if not node.next and node.letter != c: # last node and no match, string not contained
        return False
    if node.letter == c: # match, move on to next char
        return check_graph(node.next, w[1:])
    else: # no match, move on to next node
        return check_graph(node.next, w)

def longest_word(s: str, d: list[str]):
    root: Node = build_linked_list(s)
    max_size_found = 0
    winning_word = None
    for w in d:
        is_subsequence = check_graph(root, w)
        if is_subsequence and max_size_found < len(w):
            max_size_found = len(w)
            winning_word = w
    return winning_word

if __name__ == "__main__":
    assert longest_word('akbppaplnegearosfafasgao', {"able", "ale", "apple", "bale", "kangaroo"}) == 'kangaroo'
    print('test passed')
```

Feel like there's a lot more potential here, but this is where I stopped.

#### Minesweeper

Implement a minesweeper field given number of rows, cols, and bombs. - 20 minutes - $\mathcal{O}(💣)$


```python
BOMB = 9
EMPTY = 0

class Matrix:

    rows: int
    cols: int

    def __init__(self, rows: int, cols: int, bombs: int):
        self.rows = rows
        self.cols = cols
        self.data = [[EMPTY for i in range(cols)] for j in range(rows)]
        bombs = set(random.choices(range((rows * cols)-1), k=bombs))
        print(bombs)
        for bomb in bombs:
            bomb_row = bomb//cols
            bomb_col = bomb%cols
            self.set_at(bomb_row, bomb_col, BOMB)
            self.increase_neighbors(bomb_row, bomb_col)

    def set_at(self, row: int, col: int, value: int) -> int:
        self.data[row][col] = value

    def value_at(self, row: int, col: int) -> int:
        return self.data[row][col]
    
    def increase_neighbors(self, row: int, col: int):
        for i in range(row - 1, row + 2):
            for j in range(col -1, col + 2):
                if i < 0 or j < 0 or i >= self.rows or j >= self.cols:
                    continue
                value = self.value_at(i,j)
                if value == BOMB:
                    continue
                else:
                    self.set_at(i, j, value+1)

    def render(self):
        for i in range(self.rows):
            for j in range(self.cols):
                print(self.value_at(i, j), end=' ')
            print('')


def minesweeper(rows: int, cols: int, bombs: int) -> list[list[int]]:
    field = Matrix(rows, cols, bombs)
    field.render()

if __name__ == "__main__":
    minesweeper(10, 15, 10)
```

How cute is this?

```
{128, 69, 6, 5, 75, 108, 78, 46, 116, 23}
0 0 0 0 1 9 9 2 1 1 0 0 0 0 0 
0 0 0 0 1 2 2 2 9 1 0 0 0 0 0 
1 1 1 0 0 0 0 1 1 1 0 0 0 0 0 
1 9 1 0 0 0 0 0 1 1 1 0 0 0 0 
2 2 2 1 1 0 0 0 1 9 1 0 0 0 0 
9 1 1 9 1 0 0 0 1 1 1 0 0 0 0 
1 1 2 2 2 0 0 0 0 0 1 1 1 0 0 
0 0 1 9 1 0 0 1 1 1 1 9 1 0 0 
0 0 1 1 1 0 0 1 9 1 1 1 1 0 0 
0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 
```

#### Decompress

Decompress string using numbers to multiply text in square brackets - 30 minutes - $\mathcal{O}(N)$

```python
def decompress(compressed:str, ix: int = 0) -> tuple[str, int]:
    result: str = ''
    number_buffer = ''
    text_buffer = ''
    while ix < len(compressed):
        character = compressed[ix]
        ix += 1
        if re.match(r'[0-9]', character):
            number_buffer += character
            result += text_buffer
            text_buffer = ''
        elif re.match(r'[\[]', character):
            inner_result, ix = decompress(compressed, ix) # resolve what's inside the brackets
            if inner_result: # if brackets were not empty
                inner_result = int(number_buffer) * inner_result # may be zero
                result += inner_result
            number_buffer = '' # reset number buffer
        elif re.match(r'[\]]', character): # end of block, finish resolution
            return result + text_buffer, ix
        elif re.match(r'[a-z]', character): # found a character, increase buffer
            text_buffer += character
        else:
            raise Exception # char not allowed, full stop
    return result + text_buffer, ix

if __name__ == "__main__":
    assert decompress('3[abc]4[ab]c')[0] == 'abcabcabcababababc'
    assert decompress('a3[abc]4[ab]c')[0] == 'aabcabcabcababababc'
    assert decompress('10[a]')[0] == 'aaaaaaaaaa'
    assert decompress('2[3[a]b]')[0] == 'aaabaaab'
    assert decompress('a[]b')[0] == 'ab'
    assert decompress('0[abc]')[0] == ''
    print('test successful')
```

### Problems From The Google Tech Dev Guide (no longer accessible)

Some of these were randomly pick these from the list. You can find them using the Wayback Machine.

#### #28 [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

> You are climbing a staircase. It takes $n$ steps to reach the top.
> Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

I think I've been studying trees and graphs too hard, and thought it would be a good way to put my skills in practice. This solution took me 20 minutes, and it's evidently $\mathcal{O}(n^2)$. After finishing it, and reading the problem again, I realized it was the Fibonacci sequence in disguise.

```python
# Imagine a tree where the root is count of steps left. Left branch is one step, right branch is 2 steps.
# Build the tree and count the children
#             [3]
#           /     \
#        [2]       [1]
#       /   \      /
#     [1]   [0]  [0]
#    /
#  [0]          

class Node:
    steps: int
    left: "Node"
    right: "Node"

    def __init__(self, steps):
        self.steps = steps
        self.left = None
        self.right = None

class Tree:
    root: Node
    children_count: int
    def __init__(self, n: int):
        self.root = Node(n)
        self.children_count = 0

    def expand_leaves(self, node: Node):
        if node.steps >= 3:
            if not node.left:
                node.left = Node(node.steps - 1)
                self.expand_leaves(node.left)
            if not node.right:
                node.right = Node(node.steps - 2)
                self.expand_leaves(node.right)
        elif node.steps == 2:
            node.right = Node(0)
            self.children_count += 1
            node.left = Node(1)
            self.expand_leaves(node.left)
        elif node.steps == 1:
            node.left = Node(0)
            self.children_count += 1
        else:
            pass


class Solution:
    def climbStairs(self, n: int) -> int:
        tree = Tree(n)
        tree.expand_leaves(tree.root)
        return tree.children_count
```

Throughout this whole thing I had the feeling there must have been some heuristic to get the number, I thought it could've been some combinatorics, but alas. I gave myself another shot from scratch, and implemented this $\mathcal{O}(n)$ fibonacci (ugly, I know) in 3 minutes:

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n < 4:
            return n
        a = 1
        b = 2
        ways = 0
        for i in range(2,n):
            c = a
            a = b
            b = a+c
        return b
```

#### #32 Former interview question: volume of lakes

> Imagine an island that is in the shape of a bar graph. When it rains, certain areas of the island fill up with rainwater to form lakes. Any excess rainwater the island cannot hold in lakes will run off the island to the west or east and drain into the ocean.
>
> Given an array of positive integers representing 2-D bar heights, design an algorithm (or write a function) that can compute the total volume (capacity) of water that could be held in all lakes on such an island given an array of the heights of the bars. Assume an elevation map where the width of each bar is 1.
>
> Example: Given [1,3,2,4,1,3,1,4,5,2,2,1,4,2,2], return 15 (3 bodies of water with volumes of 1,7,7 yields total volume of 15) 


##### Attempt 1

Did this in a notepad, from scratch. Spent 35 minutes, 10 of which were spent meticulously trying to spot issues.
My solution wasn't ideal (it was $\mathcal{O}(n\log n)$), so I did another attempt from scratch. Here's solution 1 anyway for the records:


```python
def is_same_height(l: list[int]):
  return len(l) > 0 and min(l) == max(l)

def build_volume_list(cross_section: list) -> list[list[int]]:
  stop_condition = False
  result = [cross_section]
  while stop_condition is False:
    split_elements = False
    for i in range(len(result)):
      sublist = result[i]
      if len(sublist) == 1:
        continue
      max_element_ix = sublist.index(max(sublist))
      should_split = any(e < max(sublist) for e in sublist)
      if i > 0 and i < len(result) - 1:
        left_list = result[i-1]
        right_list = result[i+1]
        if is_same_height(left_list) and is_same_height(right_list) and left_list[0] > max(sublist) and right_list[0] > max(sublist):
          continue
      if should_split:
        result.pop(i) # remove sublist
        result.insert(i, sublist[max_element_ix+1:]) # insert in reverse
        result.insert(i, [sublist[max_element_ix]])
        result.insert(i, sublist[:max_element_ix])
        split_elements = True
        break
    if not split_elements:
      stop_condition = True
    result = [r for r in result if len(r) > 0]
  return result

def calculate_water_volume(volume_list: list[list[int]], cross_section: list[int]) -> int:
  volume_total = 0
  for i in range(1, len(volume_list) - 1):
    left_list = volume_list[i-1]
    right_list = volume_list[i+1]
    sublist = volume_list[i]
    if len(left_list) == 1 and len(right_list) == 1 and left_list[0] > max(sublist) and right_list[0] > max(sublist):
      lowest_neighbor = min(left_list[0], right_list[0])
      volume_total += sum([lowest_neighbor - e for e in sublist])
  return volume_total

def island_volume(cross_section: list[int]) -> int:
  volume_list = build_volume_list(cross_section)
  return calculate_water_volume(volume_list, cross_section)

assert island_volume([1,3,2,4,1,3,1,4,5,2,2,1,4,2,2]) == 15
assert island_volume([1,3,2,4,4,4,1,3,1,4,5,2,2,1,4,4,2,2]) == 15
assert island_volume([1,3,2,4,1,3,1,4,5,2,2,1,4,2,4]) == 17
print('test passed')
```

When running, I had made 3 small mistakes:
- inverted the order of the parameters of `list.insert`
- did not deal with empty lists `[]`
- forgot to subtract `-1` when checking when checking if it's safe to take `result[i+1]`

##### Attempt 2

The resource library says that it's a variant of the Dijkstra problem, and can be solved in $\mathcal{O}(n)$, so here's my implementation of that. This one took me 15 minutes, but I already knew what to do.

```python
def island_volume(section: list):
    # until I reach the end
    highest_node = 0
    water_volume = 0
    is_sinkhole = False
    water_count = 0
    for i in range(0, len(section)):
        # if we are at a sinkhole
        if is_sinkhole:
            water_count += section[highest_node] - section[i]
        # move until I find a node where the next node goes down
        if i < len(section) - 1 and section[i+1] >= section[highest_node]:
            is_sinkhole = False
            water_volume += water_count
            water_count = 0
            highest_node = i+1
            continue
        else:
            # move (counting volume) until I reach a node with same height or higher
            is_sinkhole = True
    # repeat from other side
    is_sinkhole = False
    water_count = 0
    highest_node = len(section) - 1
    for i in reversed(range(0, len(section))):
        # if we are at a sinkhole
        if is_sinkhole:
            water_count += section[highest_node] - section[i]
        # move until I find a node where the next node goes down
        if i > 0 and section[i-1] >= section[highest_node]:
            is_sinkhole = False
            water_volume += water_count
            water_count = 0
            highest_node = i-1
            continue
        else:
            # move (counting volume) until I reach a node with same height or higher
            is_sinkhole = True
    return water_volume
```

The leetcode solution is so much more elegant though :')

#### #33 Former interview question: Flatten Iterators

> Given an iterator of iterators, implement an interleaving iterator
>
> In object-oriented programming, the iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container's elements. The iterator pattern decouples algorithms from containers; in some cases, algorithms are necessarily container-specific and thus cannot be decoupled.
> Given an iterator of iterators, implement an interleaving iterator that takes in an iterator of iterators, and emits elements from the nested iterators in interleaved order. That is, if we had the iterators i and j iterating over the elements [ia, ib, ic] and [ja, jb] respectively, the order in which your interleaving iterator should emit the elements would be [ia, ja, ib, jb, ic].
>
> Your interleaving iterator should implement the Iterator interface, take in the iterator of iterators in its constructor, and provide the next and hasNext methods. Assume that there are no additional methods offered by the iterator.
>
> Given the following three iterators put into an array of iterators…

This one was easier, took me 10 minutes, mostly to remember the iterator syntax

```python
class IF:
    iter_list: list
    def __init__(self, iter_list: list):
        self.iter_list = iter_list
        self.last_iter = 0
    
    def __iter__(self):
        return self

    def __next__(self):
        if len(self.iter_list) == 0:
            raise StopIteration
        if self.last_iter >= len(self.iter_list):
            self.last_iter = 0
        try:
            next_value = next(self.iter_list[self.last_iter])
            if next_value:
                self.last_iter += 1
                return next_value
        except StopIteration:
            # this iterator is empty
            self.iter_list.pop(self.last_iter)
            self.last_iter += 1
            return self.__next__()
        
arr_1 = [1, 2, 3]
arr_2 = [4, 5]
arr_3 = [6, 7, 8, 9]
a = arr_1.__iter__()
b = arr_2.__iter__()
c = arr_3.__iter__()
iter_list = [a, b, c]
itfl = IF(iter_list)
assert list(itfl) == [1, 4, 6, 2, 5, 7, 3, 8, 9]
print('test passed')
```

The resource library suggested using a queue for the iterators, which yes, would've been smarter.

#### #34 Former interview question: word squares

> A “word square” is an ordered sequence of K different words of length K that, when written one word per line, reads the same horizontally and vertically. For example:
>
> BALL
> AREA
> LEAD
> LADY
> 
> In this exercise you're going to create a way to find word squares.
> 
> First, design a way to return true if a given sequence of words is a word square.
> 
> Second, given an arbitrary list of words, return all the possible word squares it contains. Reordering is allowed.
> 
> For example, the input list
> 
> [AREA, BALL, DEAR, LADY, LEAD, YARD]
> 
> should output
> 
> [(BALL, AREA, LEAD, LADY), (LADY, AREA, DEAR, YARD)]
> 
> Finishing the first task should help you accomplish the second task.
    

This one took me about 12 minutes

```python
def T(s: list[str]) -> list[str]:
    return [''.join([s[row][col] for row in range(len(s))]) for col in range(len(s))]

def is_word_square(square: list[str]) -> bool:
    # check if it's equal to T
    transpose = T(square)
    return square == transpose

from itertools import combinations, permutations

def find_squares(word_list: str, size: int = 4):
    # 6 choose 4 = 15
    s_combinations = list(combinations(word_list, size))
    # 4! * 15 = 360
    s_permutations = [list(permutations(i, size)) for i in s_combinations]
    possible_squares = [p for sublist in s_permutations for p in sublist]
    return [list(s) for s in possible_squares if is_word_square(list(s))]

# assume they're always the length of `size`
assert find_squares(['AREA', 'BALL', 'DEAR', 'LADY', 'LEAD', 'YARD']) == [['BALL', 'AREA', 'LEAD', 'LADY'], ['LADY', 'AREA', 'DEAR', 'YARD']]
print('test passed')
```

I made 3 mistakes:
- used `len` instead of `range(len(x))` on for loop
- used `concat` instead of `join`
- on transpose used `[col][row]` instead of `[row][col]`



#### #37 [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)

> Given an integer array $nums$, return the length of the longest strictly increasing subsequence.

I started this one with a quadratic version - 10 minutes - $\mathcal{O}(n^2)$.

```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        results = []
        for i in range(len(nums)):
            number = nums[i]
            for r in results:
                if r[-1] < number:
                    results += [r + [number]]
            results += [[number]]
        return max(len(r) for r in results)
```

Then, proceeded to try to write it in $\mathcal{O}(n\log n)$, which took another 11 minutes.

```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        results = {}
        for i in range(len(nums)):
            number = nums[i]
            for list_size in range(len(results.items())):
                r = results[list_size+1]
                new_candidate = r + [number]
                if r[-1] < number and results.get(len(new_candidate), [999999])[-1] > number:
                    results[len(new_candidate)] = new_candidate
            if results.get(1, [999999])[-1] > number:
                results[1] = [number]
        return max(results.keys())
```

#### #58 Find max span (Java)

> Consider the leftmost and rightmost appearances of some value in an array. We'll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)
> 
> maxSpan([1, 2, 1, 1, 3]) → 4
> 
> maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
> 
> maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

My solution took 9 minutes and 35 seconds. It's $\mathcal{O}(n^2)$. There must be a better way to do this.

```python
def max_span(a_list: list[int]) -> int:
    unique_elements = set(a_list)
    max_span_found = 0
    for element in unique_elements:
        left_most = a_list.index(element)
        right_most = len(a_list) - a_list[::-1].index(element) - 1
        span = right_most - left_most + 1
        max_span_found = max(max_span_found, span)
    return max_span_found

if __name__ == "__main__":
    assert max_span([1, 2, 1, 1, 3]) == 4
    assert max_span([1, 4, 2, 1, 4, 1, 4]) == 6
    assert max_span([1, 4, 2, 1, 4, 4, 4]) == 6
    print('tests passed')
```

I think, if you keep a dict of `{each value: position when you saw it first}`, and count how long has it been since you've seen this number, you can do this in $\mathcal{O}(n)$.