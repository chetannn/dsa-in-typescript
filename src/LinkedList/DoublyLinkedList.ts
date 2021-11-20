import { DoublyLinkedListNode } from './DoublyLinkedListNode'

class DoublyLinkedList {

    private size: number
    public head: DoublyLinkedListNode | null
    public tail: DoublyLinkedListNode | null

    constructor() {

        this.size = 0
        this.head = null
        this.tail = null

    }

    addFirst(data: number) {

        const node = new DoublyLinkedListNode(data, null, null)
        
        if(!this.head) {
            this.head = node
            this.tail = node
        }

        else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }

        this.size++

        return node.data
    }

    getSize() {
        return this.size
    }
}

export {
    DoublyLinkedList
}