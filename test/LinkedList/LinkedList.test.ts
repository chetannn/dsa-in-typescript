import { LinkedList } from '../../src/LinkedList/LinkedList'

describe('LinkedList test', () => {

    it('should create empty linked list', () => {

        const list = new LinkedList()

        expect(list).not.toBe(null)
        expect(list.head).toBeFalsy()
        expect(list.getSize()).toBe(0)

    })

    it('should add an element to the first of the linked list', () => {

        const list = new LinkedList()
        const expectedValue = list.addFirst(2)

        expect(list.getSize()).toBe(1)
        expect(list.head).toBeTruthy()
        expect(2).toBe(expectedValue)

    })

    it('should add correct element to the first of the linked list', () => {
       
        const list = new LinkedList()

        list.addFirst(5)
        list.addFirst(4)
        list.addFirst(200)

        expect(list.getSize()).toBe(3)
        expect(list.head?.data).toBe(200)
        
    })

    it('should add correct element to the last of the linked list', () => {

        const list = new LinkedList()

        list.addLast(3)
        list.addLast(2)
        list.addLast(8)
        list.addLast(22)
        list.addLast(34)

        const lastNode = list.traverse()

        expect(list.head).toBeTruthy()
        expect(list.getSize()).toBe(5)
        expect(lastNode.data).toBe(34)

    })

  })