---
title: Drop While
problemUrl: https://www.greatfrontend.com/questions/javascript/drop-while
tags:
  - javascript
  - typescript
  - arrays
---

## My Solution

### TypeScript

```typescript
const dropWhile = <T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean
): Array<T> => {
  let i = 0;

  while (predicate(array[i], i, array) && i < array.length) {
    i += 1;
  }

  return array.slice(i);
};
```
