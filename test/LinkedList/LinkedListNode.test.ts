import { LinkedListNode } from '../../src/LinkedList/LinkedListNode'

describe('LinkedListNode test', () => {

    it('should create a node', () => {

        const node = new LinkedListNode(2)

        expect(node).not.toBe(null)
        expect(node).toBeTruthy()
        expect(node.data).toBe(2)
        expect(node.next).toBe(null)

    })

  })