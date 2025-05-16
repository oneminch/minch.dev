---
title: Defanging an IP Address
problemUrl: https://leetcode.com/problems/defanging-an-ip-address/
tags:
  - javascript
  - strings
---

## My Solution

### JavaScript

```js
/**
 * @param {string} address
 * @return {string}
 */

const defangIPaddr = (address) => {
  return address.split('.').join('[.]');
};
```
