---
id: x3xaymcc1z3xttd5tsa2sg4
title: Methods of Tracking Users on the Web
desc: ""
updated: 1692905567710
created: 1692301624909
tags:
  - tracking
  - analytics
  - fingerprinting
image: /content/cover/methods-of-tracking-users.png
cover_image: https://raw.githubusercontent.com/oneminch/portfolio/main/public/content/cover/methods-of-tracking-users.png
canonical_url: https://oneminch.dev/blog/methods-of-tracking-users
description: "This article discusses the different ways web services use web tracking technology for various purposes."
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
nav_order: 1
---

This article discusses the different ways web services use web tracking technologies for various purposes. Some of the methods to track users are:

- Cookies
- Cache
- Local and session storage
- Canvas fingerprinting
- Audio fingerprinting
- Performance fingerprinting
- Basic system and internet connection information

Nowadays, almost every website uses some sort of tracking. This could be done for various purposes, but the most common use cases are for digital advertising, web analytics, and fraud protection. Other purposes include government surveillance, price discrimination, where the prices of products online vary from person to person or location to location, or something as simple as usability testing for apps.

Different services use different techniques to track and monitor their users. Before the invention of newer methods of tracking, websites used simpler ways to monitor user's activity online. Most of the earlier versions of web tracking were only performed on a session basis. When someone went to a site, a website might use a POST method on invisible forms to send user data for that session without the user's awareness. However, all the tracking was done on that session only. Once the window or tab is closed, the user can't be tracked. Another way websites monitored user activity is by having them sign in. They will be asked to authenticate with an account in order to use a service. Once that's done, every activity is automatically associated with that user.

### Storage based tracking

As the web has evolved more rapidly, the need for more sophisticated tracking methods has risen. Unlike older methods, methods being used on the modern web rely on precision and are able to track users across various websites. In other words, a user's activity tracking is not limited to only one website, but also the combination of many websites that contain various third-party entities. Data is shared among these parties so that it's more consistent and accurate. In order to do this, the data needs to be stored in small files whenever a user accesses a service and also get accessed by the services whenever needed.

## Cookies

**Cookies** are by far the most common form of storage-based tracking. Let's say you visit a website (_example.com_). Pieces of information, cookies, about you are stored in the browser storage and are given unique identifiers. The site itself usually has its own cookies. Since it was your intention to visit the site, cookies set by the site itself are less intrusive. Depending on the owner of the site, there may also be third-party cookies. These are also cookies that store information about your visit to the site (_example.com_). A third-party cookie is a cookie that originates from a different domain than the current one. If _example.com_ allowed _third-party-analytics.com_ on their site, and another site (e.g. _news.com_) contained the same third-party cookie, then _third-party-analytics.com_ logs information about your visit and engagement with both _news.com_ and _example.com_. Unless cookies are cleared, more and more information about your visit to sites that contain _third-party-analytics.com_ are logged, and a user profile can be generated for ad targeting or any other purpose. It's also important to know that not all cookies are used for targeting purposes. Cookies can also be used for authentication and collecting anonymous usage data.

## Cache

**Cache** is a technology used to store temporary web files. Visiting a website for the first time takes longer than following visits because files such as images and location are not yet 'cached' on the first visit. There's no need to load these images all over again every time a person visits a site. It could also be used to reduce DNS look up times when making a request to a website.

## Local and Session storage

**Local and Session Storage** are yet other forms of storage that store data on the client side. They are very similar to cookies, but are more advantageous because of the size of data allowed by the browser. Local storage has a much higher size (5 MB) than cookies (which are about 4 KB).

### Fingerprinting

Storage-based tracking methods have become less and less efficient as users have found a way to block them. Most browsers now offer the option to block websites from storing and accessing information on the user. Some privacy-focused browsers even do it by default. This gave way to the development of new methods of tracking: Fingerprinting. Fingerprinting is a relatively new and extremely accurate way of identifying users. It uses a variety of components to build up a profile of the visitor. The next time a user visits a website, if the parameters of this user's device match any previously stored data, then it can be concluded that it's the same user. This method doesn't rely on any cookies being set. Fingerprint data can constitute of network, location, device, platform, browser name and version.

## Canvas Fingerprinting

**[Canvas Fingerprinting](https://oneminch.dev/blog/canvas-fingerprinting)** is the most common of the fingerprinting techniques. Every web browser draws graphics differently. Websites use an invisible canvas element to draw graphics or even simple fonts. Since the rendering performance of a device is different from one another, this is used to uniquely identify a device, hence also a user.

## Audio Fingerprinting

**[Audio Fingerprinting](https://oneminch.dev/blog/audio-fingerprinting)** uses the browser's audio API to generate a signal. The signal generated is unique and can be used to form a fingerprint.

## Performance Fingerprinting

**Performance Fingerprinting** is a set of techniques that form fingerprints based on a device's performance. A website tests the JavaScript engine of a browser by performing different tasks. This yields unique information about the performance of the browser and the device. It might also provide information about the operating system and architecture of the device, since performance is highly dependent on these things.

## Other Forms of Fingerprinting

Other information like IP address, available fonts, user agent, language, time zone (timestamps), screen display (size), camera and microphone availability, device OS can be used in conjunction with each other to identify a user.

Even though it's highly unreliable, general information about the browser can be obtained by using the `navigator` property of the DOM.

```javascript
console.log(`
  Browser Name: ${navigator.appName}
  Browser Version: ${navigator.appVersion}
  Cookies Enabled: ${navigator.cookieEnabled}
  Browser Language: ${navigator.language}
  Platform: ${navigator.platform}
  User-agent header: ${navigator.userAgent}
`);
```

But values returned by these functions can be spoofed by browsers to protect the privacy of their users. That's why more than one method of fingerprinting is used in conjunction with each other to form more accurate identifiers.

To test how unique your device really is, you can use services like [AmIUnique](http://amiunique.org/fp) or EFF's [Panopticlick](http://panopticlick.eff.org).

### Further Reading

[Working with the Window.navigator Property](https://oneminch.dev/blog/working-with-window-navigator)

[Web Tracking: Mechanisms, Implications, and Defenses](https://arxiv.org/pdf/1507.07872.pdf)

[Princeton Web Census](https://webtransparency.cs.princeton.edu/webcensus/)
