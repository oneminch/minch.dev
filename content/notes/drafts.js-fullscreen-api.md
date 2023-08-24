---
id: n8ygdrjmm6e7h54n3nxtqyi
title: The JavaScript Fullscreen API
desc: ""
updated: 1692301442334
created: 1692301356027
tags:
  - TAG_1
  - TAG_2
  - TAG_3
image: /content/cover/COVER-IMAGE.png
cover_image: https://raw.githubusercontent.com/oneminch/portfolio/main/public/content/cover/FILE-SLUG.png
canonical_url: https://CANONICAL.URL
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
---

Whenever you want to watch a YouTube video, play an video game or just want to do a focused work in your browser, the full screen feature makes the exprience even more immersive. This article explains how this particular API works in JavaScript and how you can easily implement one in your projects.

**A brief intro**

The full screen API allows an element on a page to be viewed in full screen. It makes it convenient for users to view web content in full pixel width and height. It hides status bars, menu bars, any components of the browser interface as well as any applications on the device that take up screen space. It accomplishes this by calling a method on the element or HTML tag that is wanted to be in full screen mode.

When you are viewing a video in full screen, it's the <video> tags that are actually in full screen mode. If you are viewing an image in full screen, you're viewing the tag that contains the image in full screen, usually the `<img>` tag.

Basically this API is a simple one to implement. However, it doesn't have one universal way of implementation. The methods used and events fired by the API may vary from browser to browser, especially older versions of browsers. Inconsistencies as such, which are very common in the programming world, make this API a bit lengthy to write despite its simplicity.

For example, consider the following HTML code

```html
<video id="intro" controls>
  <source src="intro.webm" type="video/webm" />
  <source src="intro.mp4" type="video/mp4" />
</video>
```

We can then simply call the method `requestFullscreen()` on the video element. The method is applied to an `Element` interface (and it's child elements) to present it in full screen. This method can also be used to check whether or not full screen is available on this particular element. To exit full screen mode, the `exitFullscreen()` method is called on the `Document` interface. As in the case of the previous method, this method can also be used to check if it's supported on the document or in the browser.

```javascript
    const el = document.querySelector("#intro");
    if (el.requestFullscreen) {
        el.requestFullscreen();
    }
    ...
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
```

The `Document` interface has built-in properties that can help us determine:

- if full screen mode is available/supported (`document.fullscreenEnabled`).
- which element in the DOM is using full screen if full screen is active (`document.fullscreenElement`).

### Events

Two events are defined by the full screen API:

- `document.onfullscreenerror` - fired on the `Document` whenever an error occurs when trying to enter or exit full screen mode.
- `document.onfullscreenchange` - fired whenever there is a change in full screen status on the entire `Document`, whether it's entering or exiting full screen, or switching tabs while in full screen mode.

```javascript
    document.addEventListener("fullscreenerror", () => { ... });
    ...
    document.addEventListener("fullscreenchange", () => { ... });
```

### CSS

We can further customize the element when it is in full screen mode using CSS. The `:fullscreen` CSS pseudo-class can be used to style an element that is currently in full screen mode. As with the case of many pseudo-selectors, we need to consider browser support with CSS since it is not supported in [all browsers](https://caniuse.com/#feat=mdn-css_selectors_fullscreen).

```css
#intro:-webkit-full-screen {
  ...;
}
#intro:-moz-full-screen {
  ...;
}
#intro:-ms-fullscreen {
  ...;
}
#intro:fullscreen {
  ...;
}
```

### A Detailed Example

```javascript
function toggleFS() {
  /*  
            Checks if there is an element in
            full screen mode(including browser support)
        */
  if (
    !document.fullscreenElement &&
    !document.webkitFullscreenElement &&
    !document.mozFullScreenElement &&
    !document.msFullscreenElement
  ) {
    /*  
                Checks if full screen is available for the
                selected element and calls the method
                ('else if' blocks ensure browser support)
            */
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  } else {
    /*
                Exits full screen mode
                ('else if' blocks ensure browser support)
            */
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}
const el = document.querySelector("#fs-btn");
el.addEventListener("click", toggleFS);
```

The full screen API is a very simple and handy tool for developers to apply to their web applications. It brings immersivity and help users with smaller screens to view more content on their devices.

## References
