class LLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    append (data) {
        const newNode = new LLNode(data);
        if(!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    prepend(data) {
        const newNode = new LLNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    deleteWithValue(data) {
        if(!this.head) {
            return;
        }
        if(this.head.data == data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let previous = current;
        // let temp = 0;
        while(current) {
            if(current.data == data) {
                if(current.next) {
                    previous.next = current.next;
                }
                else {
                    previous.next = null;
                }
                return;
            }
            previous = current;
            current = current.next;
            // temp ++;
        }
    }

    printList() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    find (data) {
        let current = this.head;
        while(current) {
            if(current.data == data) {
                return current
            }
            current = current.next;
        }
        return null;
    }
}

const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);

console.log("---------- after append ----------");
ll.printList();

ll.prepend(5);

console.log("---------- after prepend ----------");
ll.printList();

ll.deleteWithValue(20);

console.log("---------- after delete ----------");
ll.printList();

console.log("\nfound:  ", ll.find(20));