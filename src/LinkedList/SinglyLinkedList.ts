import { LinkedListNode } from './LinkedListNode'

class SinglyLinkedList {

     private size: number

    constructor(public head: LinkedListNode | null = null) {
        this.size = 0
    }

    addFirst(data : number) : number {

        const node = new LinkedListNode(data, this.head)

        this.head = node
        this.size++

        return node.data
    }

    addLast(data: number) : number {

        const node = new LinkedListNode(data)

        if(!this.head) {
            this.head = node
            this.size++
            return this.head.data
        }

        let current = this.head

        while(current?.next) {
           current = current.next       
        }
       
        current!.next = node
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
