---
title: Reverse Words in a String
problemUrl: https://leetcode.com/problems/reverse-words-in-a-string/
tags:
  - javascript
  - typescript
  - string
---

## My Solution

### JavaScript / TypeScript

```typescript
const reverseWords = (s: string): string => {
  let sCopy = s
      .trim()
      .split(" ")
      .filter((word) => word.length > 0),
    left = 0,
    right = sCopy.length - 1;

  while (left < right) {
    [sCopy[left], sCopy[right]] = [sCopy[right], sCopy[left]];
    left += 1;
    right -= 1;
  }

  return sCopy.join(" ");
};
```
