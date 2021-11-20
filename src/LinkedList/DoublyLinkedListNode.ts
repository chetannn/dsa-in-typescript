import { LinkedListNode } from './LinkedListNode';

class DoublyLinkedListNode extends LinkedListNode {

    constructor(public data: number, public prev?: LinkedListNode | null,  public next: LinkedListNode | null = null) {
        super(data, next)
        this.prev = null
    }
}

export {
    DoublyLinkedListNode
}