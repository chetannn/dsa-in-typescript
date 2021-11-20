import { DoublyLinkedList } from '../../src/LinkedList/DoublyLinkedList'

describe('DoublyLinkedList tests', () => {

    it('should create empty doubly linked list', () => {

        let list = new DoublyLinkedList()

        expect(list).not.toBeNull()
        expect(list).toBeInstanceOf(DoublyLinkedList)
        expect(list.head).toBeNull()
        expect(list.tail).toBeNull()
        expect(list.getSize()).toBe(0)

    })
})