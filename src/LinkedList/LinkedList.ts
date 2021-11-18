import { LinkedListNode } from './LinkedListNode'

class LinkedList {

     private size: number

    constructor(private head: LinkedListNode | null = null) {
        this.size = 0
    }

    addFirst(data : number) : number {

        const node = new LinkedListNode(data, this.head)

        this.head = node
        this.size++

        return node.data
    }

    addLast(data: number) : number {

        let current = this.head

        while(current?.next) {
           current = current.next       
        }
        
        const node = new LinkedListNode(data)
        current!.next = node
        this.size++

        return node.data

    }

    printAllNodes() {
        let current = this.head
        
        while(current) {
            console.log(current.data)

            current = current.next
        }

    }

    getSize() {
        return this.size
    }

}

const list = new LinkedList()

list.addFirst(4)
list.addFirst(2)
list.addLast(6)
list.addLast(8)
list.addFirst(9)

list.printAllNodes()

console.log("Size:: ", list.getSize())

