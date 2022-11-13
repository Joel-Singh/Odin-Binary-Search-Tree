function createNode(value, left = null, right = null) {
  return {
    value,
    left,
    right,
  };
}

function createTree(array) {
  let newTree = {
    root: null,
    buildTree: function (array, start = 0, end = array.length - 1) {
      array.sort((x, y) => x - y);
      // Removes duplicates
      array = [...new Set(array)]

      if (start === end) {
        return createNode(array[0]);
      }

      let midPoint = Number.parseInt((end + start) / 2);

      return createNode(
        array[midPoint],
        this.buildTree(array, start, midPoint),
        this.buildTree(array, midPoint + 1, end)
      );
    },
  };
  newTree.root = newTree.buildTree(array);
  return newTree
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}
