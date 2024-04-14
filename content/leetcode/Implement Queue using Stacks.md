---
title: Implement Queue using Stacks
problemUrl: https://leetcode.com/problems/implement-queue-using-stacks/
tags:
  - javascript
  - stack
  - queue
---

## My Solution

### JavaScript / TypeScript

```typescript
class MyQueue {
  data: number[];

  constructor() {
    this.data = [];
  }

  push(x: number): void {
    this.data.push(x);
  }

  pop(): number {
    return this.data.shift();
  }

  peek(): number {
    return this.data[0];
  }

  empty(): boolean {
    return this.data.length === 0;
  }
}
```
