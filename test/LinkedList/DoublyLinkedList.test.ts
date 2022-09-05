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

    it('should add an element to the first of the doubly linked list', () => {

        let list = new DoublyLinkedList()

        const addedValue = list.addFirst(20)

        expect(list.getSize()).toBe(1)
        expect(list.head).toBeTruthy()
        expect(list.tail).toBeTruthy()
        expect(addedValue).toBe(20)

    })

    it('should and multiple elements to the first of the doubly linked list', () => {

        let list = new DoublyLinkedList()

        list.addFirst(20)
        list.addFirst(60)
        list.addFirst(121)
        list.addFirst(300)

        expect(list.getSize()).toBe(4)
        expect(list.head?.data).toBe(300)
        expect(list.tail?.data).toBe(20)
        expect(list.head?.prev).toBeNull()
        expect(list.tail?.next).toBeNull()
        expect(list.head?.next?.next).toBe(list.tail?.prev)
    })

    it('should add an element to the last of the doubly linked list', () => {

        let list = new DoublyLinkedList()

        const addedValue = list.addLast(20)

        expect(list.getSize()).toBe(1)
        expect(list.head).toBeTruthy()
        expect(list.tail).toBeTruthy()
        expect(addedValue).toBe(20)

        list.addLast(30)
        expect(list.tail?.data).toBe(30)

        list.addLast(60)
        expect(list.tail?.data).toBe(60)
        expect(list.getSize()).toBe(3)

    })
})
