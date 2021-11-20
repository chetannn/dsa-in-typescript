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

    getSize() {
        return this.size
    }
}

export {
    DoublyLinkedList
}