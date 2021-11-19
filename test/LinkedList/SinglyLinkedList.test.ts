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
        expect(list.tail).toBe(list.head)

    })

    it('should add correct element to the first of the linked list', () => {
       
        const list = new SinglyLinkedList()

        list.addFirst(5)
        list.addFirst(4)
        list.addFirst(200)

        expect(list.getSize()).toBe(3)
        expect(list.head?.data).toBe(200)
        expect(list.tail?.data).toBe(5)
        
    })

    it('should assign last element to head if linked list is empty', () => {
        
        const list = new SinglyLinkedList()

        list.addLast(600)

        expect(list.getSize()).toBe(1)
        expect(list.head).toBeTruthy()
        expect(list.tail).toBe(list.head)
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
        expect(list.tail).toBe(lastNode)

    })

    it('should delete correct element from the first of the linked list if list has only one element', () => {

        const list = new SinglyLinkedList()

        list.addFirst(5)

        list.deleteFirst()

        expect(list.getSize()).toBe(0)
        expect(list.head).toBeNull()
        expect(list.tail).toBeNull()

    })

    it('should delete multiple elements from the first of the linked list if list has more than one element', () => {

        const list = new SinglyLinkedList()

        list.addFirst(5)
        list.addFirst(6)
        list.addFirst(8)
        list.addFirst(12)

        list.deleteFirst()
        list.deleteFirst()
        list.deleteFirst()

        expect(list.getSize()).toBe(1)
        expect(list.head?.data).toBe(5)
        expect(list.tail).toBe(list.head)

    })

    it('should delete correct element from the last of the linked list if list has only one element', () => {

        const list = new SinglyLinkedList()

        list.addLast(20)

        list.deleteLast()

        expect(list.getSize()).toBe(0)
        expect(list.tail).toBeNull()
        expect(list.head).toBeNull()

    })

    it('should delete multiple elements from the last of the linked list if list has more than on element', () => {

        const list = new SinglyLinkedList()

        list.addLast(20)
        list.addLast(30)
        list.addLast(40)
        list.addLast(50)

        const secondNode = list.getAt(1)

        list.deleteLast()
        list.deleteLast()

        expect(list.getSize()).toBe(2)
        expect(list.tail).toBe(secondNode)
        expect(list.tail?.next).toBeNull()
    })


    it('should use fromArray method to convert all the array items to linked list',  () => {

        const list = new SinglyLinkedList()
        const arr = [2,5,6,8,12]

        list.fromArray(arr)

        expect(list.getSize()).toBe(arr.length)
        expect(list.head?.data).toBe(2)
        expect(list.tail?.data).toBe(12)
        expect(list.tail?.next).toBeNull()

    })

    it('should throw index out of bound if the index exceeds the linked list', () => {

        const list = new SinglyLinkedList()

        list.addLast(20)
        list.addLast(40)
        list.addLast(70)
        list.addLast(800)

        expect(() => { list.deleteAt(10) }).toThrow('Index out of bound')
    })

  })