import { LinkedListNode } from './LinkedListNode';

class DoublyLinkedListNode extends LinkedListNode {

    constructor(public data: number, public prev: LinkedListNode|null = null,  public next: LinkedListNode | null = null) {
        super(data, next)
    }
}

export {
    DoublyLinkedListNode
}
