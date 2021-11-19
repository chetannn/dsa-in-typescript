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

    getAt(index: number) : LinkedListNode {

        let current = this.head

        for(let i = 0; i < index; i++) {
            current = current!.next
        }

        return current!

    }

    deleteFirst() : void {

        if(!this.head) {
            return
        }

        if(this.getSize() === 1) {
            this.head = null
            this.tail = null
        }

        else {
            this.head = this.head.next
        }

        this.size--
       
    }

    deleteLast() : void {

        if(this.getSize() <= 1) {
            this.deleteFirst()
        }

        else {
           let secondLastNode = this.getAt(this.getSize() - 2)
           this.tail = secondLastNode
           this.tail.next = null
           this.size--
        }

        
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


// it is the art and science of identifying, analyzing and responding to risk throughout the list of a project