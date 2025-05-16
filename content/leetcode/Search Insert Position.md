---
title: Search Insertion Position
problemUrl: https://leetcode.com/problems/search-insert-position/
tags:
  - javascript
  - arrays
---

## My Solution

### JavaScript

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = (nums, target) => {
  let pos = nums.indexOf(target);

  if (pos < 0) {
    nums.push(target);
    nums.sort((a, b) => a - b);
    pos = nums.indexOf(target);
  }

  return pos;
};
```
