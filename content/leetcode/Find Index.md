---
title: Find Index
problemUrl: https://www.greatfrontend.com/questions/javascript/find-index
tags:
  - javascript
  - typescript
  - arrays
---

## My Solution

### TypeScript

```typescript
const findIndex = <T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
  fromIndex = 0
): number => {
  let startFrom =
    fromIndex < 0
      ? fromIndex < -array.length
        ? 0
        : array.length + fromIndex
      : fromIndex;

  for (let i = startFrom; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }

  return -1;
};
```
