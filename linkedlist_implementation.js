class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = null;
let tail = null;

function appendNode(data) {
    let node = new Node(data);
    if (head === null) {
        head = node;
        tail = node;
    }
    else {
        tail.next = node;
        tail = node;
    }
}

function prependNode(data) {
    let node = new Node(data);
    node.next = head;
    head = node;
}

function insertNode(data, index) {
    let node = new Node(data);
    let start = head;
    let ctr = 0;
    while (ctr !== index) {
        start = start.next;
        ctr++;
    }
    let current = start;
    start = start.next;
    current.next = node;
    node.next = start;
}

function displayList(headNode) {
    let start = headNode;
    let list = '';
    while (start.next !== null) {
        list += start.data + '->';
        start = start.next;
    }
    list += start.data;
    console.log(list);
}

function reverseList() {
    let current = null;
    let prev = null;
    let next = head;

    while(next !== null){
        current=next;
        next=next.next;
        current.next=prev;
        prev=current;
    }
    
    return prev;

}

appendNode(2);
appendNode(4);
appendNode(8);
appendNode(3);
appendNode(6);

prependNode(10);

insertNode(100, 2);

displayList(head);

const newHead=reverseList();

displayList(newHead)