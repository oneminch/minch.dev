---
title: Kids With the Greatest Number of Candies
problemUrl: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
tags:
  - javascript
  - typescript
  - array
---

## My Solution

### JavaScript / TypeScript

```typescript
const kidsWithCandies = (
  candies: number[],
  extraCandies: number
): boolean[] => {
  let maxCandies: number = Math.max(...candies),
    result: boolean[] = [];

  for (let candy of candies) {
    result.push(candy + extraCandies >= maxCandies);
  }

  return result;
};
```
