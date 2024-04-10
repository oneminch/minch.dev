---
title: Invert Binary Tree
problemUrl: https://leetcode.com/problems/invert-binary-tree/
tags:
  - javascript
  - binary tree
  - bfs
  - dfs
---

## My Solution

### JavaScript / TypeScript

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (!root) {
    return null;
  }

  const leftChild = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(leftChild);

  return root;
};
```
