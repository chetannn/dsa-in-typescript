class TreeNode {
    private left: TreeNode|null
    private right: TreeNode|null

    constructor(public value: number|null) {
        this.left = null
        this.right = null
    }

    add(value: number) {

        if(this.value === null) {
            this.value = value
            return
        }

        if(this.value < value) {
            if(this.right) {
                this.right.add(value)
                return
            }
            const newNode = new TreeNode(value)
            this.right = newNode
            return 
        }

        if(this.value > value) {
            if(this.left) {
                this.left.add(value)
                return
            }
            const newNode = new TreeNode(value)
            this.left = newNode
            return
        }
    }

    find(value: number) : TreeNode|null {

        if(this.value === value) {
            return this
        }

        if(this.value! < value && this.right) {
            return this.right.find(value)
        }

        if(this.value! > value && this.left) {
            return this.left.find(value)
        }

        return null

    }
}

class BinarySearchTree {
        
    private root: TreeNode

    constructor() {
        this.root = new TreeNode(null)
    }

    add(value: number) {
        this.root.add(value)
    }

    remove() {

    }

    find(value: number) : TreeNode|null {
        return this.root.find(value)
    }
}

export default BinarySearchTree
