---
title: Two Sum
problemUrl: https://leetcode.com/problems/two-sum/
tags:
  - python
  - javascript
  - typescript
---

## My Solution

### Python

```py
def twoSum(nums: List[int], target: int) -> List[int]:
    for i in range(len(nums)):
      y = target - nums[i]
      sublist = nums[i+1:]
      if y in sublist:
          return [i, nums.index(y, i+1)]
```

```py
def twoSum(nums: List[int], target: int) -> List[int]:
    hash_map = {}

    for i in range(len(nums)):
        y = target - nums[i]
        if y in hash_map:
            return [i, hash_map[y]]

        hash_map[nums[i]] = i
```

**Brute Force: O(n^2)**

```py
def twoSum(nums: List[int], target: int) -> List[int]:
    for i in range(len(nums) - 1):
        for num in nums[i+1:]:
            if nums[i] + num == target:
                return [i, nums[i+1:].index(num) + i + 1]
```

### JavaScript

**(TypeScript, technically)**

#### Two Pointer Approach (Sorted Input)

```typescript
function twoSum(nums: number[], target: number): number[] {
  let i = 0,
    j = nums.length - 1;

  while (i < j) {
    const currSum = nums[i] + nums[j];

    if (currSum === target) {
      break;
    }

    if (currSum < target) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  return [i, j];
}
```

#### Hash Table Approach

```typescript
function twoSum(nums: number[], target: number): number[] {
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in hashTable) {
      return [hashTable[diff], i];
    } else {
      hashTable[nums[i]] = i;
    }
  }
}
```
