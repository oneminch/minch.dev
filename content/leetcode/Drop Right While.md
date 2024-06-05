---
title: Drop Right While
problemUrl: https://www.greatfrontend.com/questions/javascript/drop-right-while
tags:
  - javascript
  - typescript
  - arrays
---

## My Solution

### TypeScript

```typescript
const dropRightWhile = <T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean
): Array<T> => {
  let i = array.length - 1;

  while (predicate(array[i], i, array) && i >= 0) {
    i -= 1;
  }

  return array.slice(0, i + 1);
};
```
