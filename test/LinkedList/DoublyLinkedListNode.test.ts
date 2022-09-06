import { DoublyLinkedListNode } from '../../src/LinkedList/DoublyLinkedListNode'

describe('DoublyLinkedListNode test', () => {
    it('should create an empty doubly linked list node', () => {
        const node = new DoublyLinkedListNode(20)

        expect(node).toBeInstanceOf(DoublyLinkedListNode)
        expect(node).not.toBeNull()
        expect(node.data).toBe(20)
        expect(node.prev).toBeNull()
        expect(node.next).toBeNull()
    })
})
