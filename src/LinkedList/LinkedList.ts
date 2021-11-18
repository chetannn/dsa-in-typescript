import { LinkedListNode } from './LinkedListNode'

class LinkedList {

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

export {
    LinkedList
}
