---
title: Is Subsequence
problemUrl: https://leetcode.com/problems/is-subsequence/
tags:
  - javascript
  - typescript
  - string
  - two pointers
---

## My Solution

### JavaScript / TypeScript

```typescript
const isSubsequence = (s: string, t: string): boolean => {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i += 1;
      j += 1;
    } else {
      j += 1;
    }
  }

  return i === s.length;
};
```
