import exp from 'constants'
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

    it('should add correct element after a specified node of the linked list', () => {

        const list = new SinglyLinkedList()

        list.addLast(20)
        list.addLast(50)
        list.addLast(23)
        list.addLast(44)

        list.insertAfter(12, 50)

        const recentlyAddedNode = list.getAt(2)

        expect(list.getSize()).toBe(5)
        expect(recentlyAddedNode.data).toBe(12)
        expect(recentlyAddedNode.next).not.toBeNull()
        expect(recentlyAddedNode.next?.data).toBe(23)
       
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

    it('should convert all the nodes of the linked list to array using toArray method', () => {

        const list = new SinglyLinkedList()
        const arr = [3, 4, 6, 8]

        list.addLast(3)
        list.addLast(4)
        list.addLast(6)
        list.addLast(8)

        const convertedArray = list.toArray()

        expect(list.getSize()).toBe(4)
        expect(convertedArray).toEqual(arr)
        expect(convertedArray.length).toBe(4)

    })

    it('should throw index out of bound if the index exceeds the linked list', () => {

        const list = new SinglyLinkedList()

        list.addLast(20)
        list.addLast(40)
        list.addLast(70)
        list.addLast(800)

        expect(() => { list.deleteAt(10) }).toThrow('Index out of bound')
    })

    it('should delete the correct element from the linked list using the index', () => {

        const list = new SinglyLinkedList()

        list.addLast(20)
        list.addLast(40)
        list.addLast(70)
        list.addLast(800)

        list.deleteAt(2)

        const secondNode = list.getAt(1)
        const lastNode = list.traverse()

        expect(list.getSize()).toBe(3)
        expect(secondNode.next).toBe(lastNode)
        expect(lastNode).toBe(list.tail)
        expect(lastNode.next).toBe(null)

    })

    it('should find the correct element from the linked list using value', () => {
      
        const list = new SinglyLinkedList()

        list.addLast(20)
        list.addLast(40)
        list.addLast(60)

        const node = list.find(60)

        expect(node).not.toBeNull()
        expect(node.data).toBe(60)
        expect(node.next).toBe(null)

    })

    it('should reverse the linked list', () => {
        
        const list = new SinglyLinkedList()

        list.addLast(20)
        list.addLast(40)
        list.addLast(60)

        list.reverse()


        expect(list.head?.data).toBe(60)
        expect(list.tail?.data).toBe(20)
        expect(list.getAt(1).data).toBe(40)

    })

  })
