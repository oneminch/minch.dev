---
title: Valid Anagram
problemUrl: https://leetcode.com/problems/valid-anagram/
tags:
  - javascript
  - strings
  - hash tables
---

## My Solution

### JavaScript / TypeScript

```typescript
const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const hashTable: Record<string, number> = {};

  for (let char of s) {
    if (char in hashTable) {
      hashTable[char] += 1;
    } else {
      hashTable[char] = 1;
    }
  }

  for (let char of t) {
    if (char in hashTable) {
      hashTable[char] -= 1;
    } else {
      return false;
    }
  }

  return Object.values(hashTable).every((charCount) => charCount === 0);
};
```
