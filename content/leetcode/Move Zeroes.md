---
title: Move Zeroes
problemUrl: https://leetcode.com/problems/move-zeroes/
tags:
  - python
  - javascript
  - in-place
  - two pointers
---

## My Solution

### JavaScript / TypeScript

**Modified In-Place.**

```typescript
const moveZeroes = (nums: number[]): void => {
  let i = 0,
    j = 1;

  while (j < nums.length) {
    if (nums[i] === 0 && nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 1;
      j += 1;
    } else if (nums[i] === 0 && nums[j] === 0) {
      j += 1;
    } else {
      j += 1;
      i += 1;
    }
  }
};
```

### Python

**Modified In-Place.**

```py
def moveZeroes(nums: List[int]) -> None:
    zero_count = 0

    while 0 in nums:
        nums.pop(nums.index(0))
        zero_count+=1

    zeroes = [0]*zero_count
    nums += zeroes
```
