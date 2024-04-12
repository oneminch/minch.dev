---
title: Binary Search
problemUrl: https://leetcode.com/problems/binary-search/
tags:
  - python
  - javascript
  - binary search
---

## My Solution

### Python

```python
def search(nums: List[int], target: int) -> int:
    index = 0
    nums_copy = nums[:]
    midpoint = len(nums_copy)//2

    while len(nums_copy) > 1 and target != nums_copy[midpoint]:
        if target > nums_copy[midpoint]:
            index += midpoint
            nums_copy[:] = nums_copy[midpoint:]
        else:
            nums_copy = nums_copy[:midpoint]

        midpoint = len(nums_copy)//2


    return index + midpoint if target == nums_copy[midpoint] else -1
```

### JavaScript / TypeScript

```typescript
const search = (nums: number[], target: number): number => {
  let left = 0,
    right = nums.length - 1,
    midpoint = -1;

  while (left <= right) {
    midpoint = Math.ceil((left + right) / 2);

    if (target < nums[midpoint]) {
      right = midpoint - 1;
    } else if (target > nums[midpoint]) {
      left = midpoint + 1;
    } else {
      return midpoint;
    }
  }

  return -1;
};
```
