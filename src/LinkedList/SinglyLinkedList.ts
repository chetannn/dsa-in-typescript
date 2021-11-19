import { LinkedListNode } from './LinkedListNode'

class SinglyLinkedList {

     private size: number
     public tail: LinkedListNode | null

    constructor(public head: LinkedListNode | null = null) {
        this.size = 0
        this.tail = null
    }

    addFirst(data : number) : number {

        const node = new LinkedListNode(data, this.head)

        this.head = node

        if(!this.tail) {
            this.tail = this.head
        }

        this.size++

        return node.data
    }

    addLast(data: number) : number {

        const node = new LinkedListNode(data)

        if(!this.head) {
            return this.addFirst(data)
        }
        
        this.tail!.next = node
        this.tail = node
        this.size++

        return node.data
    }

    traverse() : LinkedListNode {

        let current = this.head
        
        while(current?.next) {
            current = current.next
        }

        return current!
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

export {
    SinglyLinkedList
}
