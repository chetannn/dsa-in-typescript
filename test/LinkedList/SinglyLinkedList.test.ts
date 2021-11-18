import { SinglyLinkedList } from '../../src/LinkedList/SinglyLinkedList'

describe('SinglyLinkedList test', () => {

    it('should create empty linked list', () => {

        const list = new SinglyLinkedList()

        expect(list).not.toBe(null)
        expect(list.head).toBeFalsy()
        expect(list.getSize()).toBe(0)

    })

    it('should add an element to the first of the linked list', () => {

        const list = new SinglyLinkedList()
        const expectedValue = list.addFirst(2)

        expect(list.getSize()).toBe(1)
        expect(list.head).toBeTruthy()
        expect(2).toBe(expectedValue)

    })

    it('should add correct element to the first of the linked list', () => {
       
        const list = new SinglyLinkedList()

        list.addFirst(5)
        list.addFirst(4)
        list.addFirst(200)

        expect(list.getSize()).toBe(3)
        expect(list.head?.data).toBe(200)
        
    })

    it('should assign last element to head if linked list is empty', () => {
        
        const list = new SinglyLinkedList()

        list.addLast(600)

        expect(list.getSize()).toBe(1)
        expect(list.head).toBeTruthy()
        expect(list.head?.data).toBe(600)
    })

    it('should add correct element to the last of the linked list', () => {

        const list = new SinglyLinkedList()

        list.addLast(3)
        list.addLast(2)
        list.addLast(8)
        list.addLast(22)
        list.addLast(34)

        const lastNode = list.traverse()

        expect(list.head).toBeTruthy()
        expect(list.head?.data).toBe(3)
        expect(list.getSize()).toBe(5)
        expect(lastNode.data).toBe(34)

    })

  })