import BinarySearchTree from '../../src/binarySearchTree/BinarySearchTree'

describe('BinarySearch Tests', function () {
    it('should create the instance of BinarySearchTree class', function () {
        const bst = new BinarySearchTree()
        expect(bst).toBeInstanceOf(BinarySearchTree)
        expect(bst).not.toBeNull()
    })

    it('should add an element to the root of the Binary Search Tree', function () {
        const bst = new BinarySearchTree()
        bst.add(5)
        const node = bst.find(5)
        expect(node).not.toBeNull()
        expect(node?.value).toEqual(5)
    })
})
