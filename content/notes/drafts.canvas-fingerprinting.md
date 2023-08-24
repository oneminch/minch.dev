---
id: kn3e4dqgo1q4vg71z3ju4kv
title: Canvas Fingerprinting
desc: ""
updated: 1692905604518
created: 1692301487830
tags:
  - fingerprinting
  - canvas-fingerprinting
image: /content/cover/canvas-fingerprinting.png
cover_image: https://raw.githubusercontent.com/oneminch/portfolio/main/public/content/cover/canvas-fingerprinting.png
canonical_url: https://oneminch.dev/blog/canvas-fingerprinting
description: SHORT BLOG DESCRIPTION
head:
  meta:
    - name: robots
      content: "index, follow"
    - name: author
      content: Dawit U (@oneminch)
    - property: "og:type"
      content: article
    - name: "twitter:card"
      content: summary_large_image
series: Web Tracking Technologies
nav_order: 3
---

In this article, we will explore a web tracking method called fingerprinting, more specifically **canvas fingerprinting**.

Fingerprinting is one of the many ways websites used to track users. It's relatively more accurate than many previous version of tracking. It collects as much information about a user's device and build a unique fingerprint on that device. The inefficiency of cookie-based web tracking has lead to the development this technology and it is now being used by many websites. It can be used for various reasons but the most common ones are ad targeting by companies like Google and fraud protection by financial institutions like banks.

Canvas Fingerprinting is the most commonly used method of fingerprinting. It's one of the techniques that identify users based on **device performance**.

Techniques in this domain use scripts that task the browser to complete a certain task. Since there are a lot of devices now more than ever, the make, model as well as the performance of these devices are more or less unique and differ from one another. If they are the same in one aspect, they differ in another. This is what makes fingerprinting a very effective technique to uniquely identify users. The same browser with the same version and build but on a different device has a performance that varies in a way the devices holding the browser vary.

Before we move further, let's discuss the concept of hashing. **Hashing** is the method of mapping or converting a piece of data like text into a fixed-size value which could either be an integer or a combination of integers and strings.  
Consider this simple hash function:

```javascript
const hashThis = (input) => {
  return input * 13;
};

console.log(hashThis(10));
// Outputs: 130 (maps 10 to 130)

console.log(hashThis(11));
// Outputs: 141 (even adding 1 to previous input yields different value)
```

What's important to know about hash functions is the same input always yields the same output and no two different inputs yield the same output. In other words, the hashed value you get from the function can only be derived from one input.  
From the above example, only '10' can map to '130'. No other value should be run through `hashThis()` and yield the same output as '130'. However, it's vital to know as the complexity of the function grows, collisions might occur.  
Another thing about to know about hash values is that they are irreversible. Unless the original value is known, it's hard to compute it from the output. That's why hash functions are a very common practice in the security realm. They are used in the encryption of data such as passwords or communication.

Hash functions are usually carefully designed so there are fewer collisions. All these properties make hashing functions very suitable for fingerprinting. In the case of fingerprinting, if collisions occur, the website can falsely identify two or more users as being the same user.

### Back to the Canvas

Every browser performs tasks differently. Hence, every browser draws graphics differently. Even if it is the same graphics, it's computation differs in a very tiny detail that is invisible to the eye. But, a computer is able to distinguish between two similarly drawn graphics.

The performance engines of browsers vary from one another. The engines used for image processing and compression are different even if the images are identical visually. Font usage also varies depending on the operating system, and using canvas to render commonly used fonts results in different fingerprints. Canvas fingerprinting takes advantage of these differences.

A website assigns your browser the task of drawing graphics which could be a simple line or piece of text but usually a bit more complex.

```html
<canvas class="canvas"></canvas>
```

```javascript
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

// Maximize performance effect by
// changing blending/composition effect
ctx.globalCompositeOperation = "lighter";

// Render a blue rectangle
ctx.fillStyle = "rgb(0, 0, 255)";
ctx.fillRect(25, 65, 100, 20);

// Render a black text: "Hello, OpenGenus"
var txt = "Hello, OpenGenus";
ctx.font = "14px 'Arial'";
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillText(txt, 25, 110);

// Render arcs: red circle & green half-circle
ctx.fillStyle = "rgb(0,255,0)";
ctx.beginPath();
ctx.arc(50, 50, 50, 0, Math.PI * 3, true);
ctx.closePath();
ctx.fill();
ctx.fillStyle = "rgb(255,0,0)";
ctx.beginPath();
ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fill();
```

This outputs something like this:

![Screenshot_2019-10-22-JS-Bin](https://iq.opengenus.org/content/images/2019/10/Screenshot_2019-10-22-JS-Bin.png)

Even though this might also yield the same image visually on every device, the data behind is different. A canvas function called `toDataURL()` returns a data URI representation of the image drawn on the canvas.

```javascript
console.log(canvas.toDataURL());
/* 
        Ouputs something like:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
        mblAAAWDElEQVQImWNgoBMAAABpAAFEI8ARexAAAElFTkSuQmCC"
    */
```

This in itself is a complicated piece of information but it can further be stripped down to be passed into a hashing function. The hashing function then returns a unique fingerprint about that device which makes it convenient for websites to easily identify users. Other information like IP address, available fonts, user agent, language, time zone (timestamps), screen display (size), camera and microphone availability, device OS can be used in conjunction with this canvas information to develop a more accurate fingerprint.

```javascript
const deviceInfo = {
  browserName: navigator.appName,
  browserVersion: navigator.appVersion,
  cookiesEnabled: navigator.cookieEnabled,
  browserLanguage: navigator.language,
  platform: navigator.platform,
  UserAgentHeader: navigator.userAgent
};
```

Most everything happens behind the scenes and users aren't aware of the process. Unlike cookies, it's harder to know what each website is doing behind the scenes. And so far there's no effective way against fingerprinting. Browsers like Tor, Firefox and Brave claim to block fingerprinting by default. Other methods of defense are browser extensions which work by either blocking JavaScript or giving a fake value when asked by websites.

### References

[Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)  
[Web Tracking Methods](https://iq.opengenus.org/methods-to-track-user-on-web/)  
[canvas.toDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)  
[Cross-Origin Fingerprinting Unlinkability](https://www.torproject.org/projects/torbrowser/design/#fingerprinting-linkability)
