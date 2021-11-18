import { LinkedList } from '../../src/LinkedList/LinkedList'

describe('LinkedList test', () => {

    it('should create empty linked list', () => {
        
        const list = new LinkedList()

        expect(list).not.toBe(null)
        expect(list.getSize()).toBe(0)

    })

    it('should add an element to the first of the linked list', () => {

        const list = new LinkedList()
        const expectedValue = list.addFirst(2)

        expect(list.getSize()).toBe(1)
        expect(2).toBe(expectedValue)

    })

  })