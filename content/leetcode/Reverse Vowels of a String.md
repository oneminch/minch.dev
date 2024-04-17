---
title: Reverse Vowels of a String
problemUrl: https://leetcode.com/problems/reverse-vowels-of-a-string/
tags:
  - javascript
  - typescript
  - string
  - two pointers
---

## My Solution

### JavaScript / TypeScript

```typescript
const reverseVowels = (s: string): string => {
  const vowelAsciiMap: Record<string, number> = {
    a: 97,
    e: 101,
    i: 105,
    o: 111,
    u: 117
  };

  let i = 0,
    j = s.length - 1,
    reversed = s.split("");

  while (i < j) {
    let leftCharInMap = reversed[i].toLowerCase() in vowelAsciiMap,
      rightCharInMap = reversed[j].toLowerCase() in vowelAsciiMap;

    if (leftCharInMap && rightCharInMap) {
      [reversed[i], reversed[j]] = [reversed[j], reversed[i]];
      i += 1;
      j -= 1;
    } else if (!leftCharInMap) {
      i += 1;
    } else if (!rightCharInMap) {
      j -= 1;
    }
  }

  return reversed.join("");
};
```
