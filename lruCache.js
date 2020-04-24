// LRU Cache

/*
    Design and implement a data structure for Least Recently Used (LRU) cache. 
    It should support the following operations: get and put.

    "get(key)" - Get the value (will always be positive) of the key if the key 
        exists in the cache, otherwise return -1.
  
    "put(key, value)" - Set or insert the value if the key is not already present. When 
        the cache reached its capacity, it should invalidate the least recently used 
        item before inserting a new item.

    The cache is initialized with a positive capacity.

    Follow up:
    Could you do both operations in O(1) time complexity?

    Example:

    LRUCache cache = new LRUCache( 2 /* capacity */ );

    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);       // returns 1
    cache.put(3, 3);    // evicts key 2
    cache.get(2);       // returns -1 (not found)
    cache.put(4, 4);    // evicts key 1
    cache.get(1);       // returns -1 (not found)
    cache.get(3);       // returns 3
    cache.get(4);       // returns 4

*/

/*
    I - capacity amount when creating a new instance of LRU cache
    O - "get" should return a specific value depending on the key given
    C - constant time for retrieval
    E - if key does not exist in cache, return -1.

*/

/*

    "put":
        - If the key value is greater then 1 and less than or equal to capacity
        - if storage <= capacity
            add element into cache
            increase storage by one
            add inserted property and set it equal to 1
                decrease other element's inserted property by one (they were added earlier, lower priority)
            add extracted property and set it equal to 0
        if adding this element means storage > capacity
            - search current elements and sort them based on lowest extracted properties
            - remove the element with the lowest extracted property
            - then add new element

    "get"
        - get the element from the cache, if it exists
        - add += 1 to its extracted property and decrease all element extracted properties by one

*/

// SOLUTION IS TO USE A DOUBLY LINKED LIST

var LRUCache = function(limit) {
    this.list = new List();
    this.limit = limit; 
};

var LRUCacheItem = function(val, key) {
    let newNode = {};
    let nodeKey = key; 
    newNode[nodeKey] = val;
    let node = new ListNode(null, newNode, null);
    return node;
};

LRUCache.prototype.size = function() {
    let current = this.list.head;
    let counter = 0;

    while (current !== null) {
        if (current.val) {
            counter++;
            current = current.next
        }
    }

    return counter;
};

LRUCache.prototype.get = function(key) {
    let current = this.list.head;
    let item = null;

    while (current !== null) {
        if (current.val.hasOwnProperty(key)) {
            item = current.val[key];
            this.list.moveToFront(current);
        }

        current = current.next;
    }

    if (!item) {
        return -1
    } else {
        return item
    }
};

LRUCache.prototype.put = function(key, val) {
    if (this.limit) {
        let newNode = new LRUCacheItem(val, key);
        this.list.moveToFront(newNode);
        this.limit -= 1;
    } else if (this.limit <= 0) {
        this.list.pop();
        let newNode = new LRUCacheItem(val, key);
        this.list.moveToFront(newNode);
    }
};

var List = function () {
    this.head = null;
    this.tail = null;
};

var ListNode = function (prev, val, next) {
    this.prev = prev || null;
    this.val = val;
    this.next = next || null;
};

// Insert at the head of the list.
List.prototype.unshift = function (val) {
    // Empty list
    if (this.head === null && this.tail === null) {
        this.head = this.tail = new ListNode(null, val, null);
        // Not empty list.
    } else {
        this.head = new ListNode(null, val, this.head);
        this.head.next.prev = this.head;
    }

    return this.head;
};

// Delete at the head of the list.
List.prototype.shift = function () {
    // Empty list
    if (this.head === null && this.tail === null) {
        return null;
        // Not empty list.
    } else {
        var head = this.head;
        this.head = this.head.next;
        head.delete();
        return head.val;
    }
};

// Insert at the end of the list.
List.prototype.push = function (val) {
// Empty list
    if (this.head === null && this.tail === null) {
        this.head = this.tail = new ListNode(null, val, null);
    // Not empty list.
    } else {
        this.tail = new ListNode(this.tail, val, null);
        this.tail.prev.next = this.tail;
    }

    return this.tail;
};

// Delete at the end of the list.
List.prototype.pop = function () {
    // Empty list
    if (this.head === null && this.tail === null) {
        return null;
        // Not empty list.
    } else {
        var tail = this.tail;
        this.tail = this.tail.prev;
        tail.delete();
        return tail.val;
    }
};

// Move a node to the front of the List
List.prototype.moveToFront = function (node) {
    if (node === this.tail) {
        this.pop();
    } else if (node === this.head) {
        return;
    } else {
        node.delete();
    }

    node.prev = node.next = null;

    // Don't delegate to shift, since we want to keep the same
    // object.

    // Empty list
    if (this.head === null && this.tail === null) {
        this.head = this.tail = node;
    // At least one node.
    } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
};

// Move a node to the end of the List
List.prototype.moveToEnd = function (node) {
    if (node === this.head) {
        this.shift();
    } else if (node === this.tail) {
        return;
    } else {
        node.delete();
    }

    // Don't delegate to push, since we want to keep the same
    // object.

    node.prev = node.next = null;

    // Empty list
    if (this.head === null && this.tail === null) {
        this.head = this.tail = node;
    // At least one node.
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
};

ListNode.prototype.delete = function () {
    if (this.prev) { this.prev.next = this.next; }
    if (this.next) { this.next.prev = this.prev; }
};