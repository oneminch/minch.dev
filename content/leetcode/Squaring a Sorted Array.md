---
title: Squares of a Sorted Array
problemUrl: https://leetcode.com/problems/squares-of-a-sorted-array
tags:
  - javascript
  - two pointers
  - array
---

## My Solution

### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortedSquares(nums) => {
    const n = nums.length;
    let squares = Array(n).fill(0),
        i = 0,
        j = n-1;

    while (i < j) {
      if (nums[i]**2 < nums[j]**2) {
        squares[j-i] = nums[j]**2
        j -= 1
      } else {
        squares[j-i] = nums[i]**2
        i += 1
      }
    }
    squares[0] = nums[i]**2

    return squares;
}
```
