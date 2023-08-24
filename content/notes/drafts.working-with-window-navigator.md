---
id: l0ex9063hwaghnwl0okfs0z
title: Working with the Window.navigator Property
desc: ""
updated: 1692905708838
created: 1692301762949
tags:
  - web-tracking
  - dom
image: /content/cover/working-with-window-navigator.png
cover_image: https://raw.githubusercontent.com/oneminch/portfolio/main/public/content/cover/working-with-window-navigator.png
canonical_url: https://oneminch.dev/blog/working-with-window-navigator
description: "This article looks into `window.navigator` property of a web document and use it to get information about the browser and load different code depending on browser."
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
nav_order: 2
---

This article looks into `window.navigator` property of a web document and use it to get information about the browser and load different code depending on browser.

The Document Object Model (DOM) is a programming interface for HTML/XML documents which specifies their logical structure. It is basically a structural representation of a web document which contains the elements/blocks that build up that document and their corresponding contents. It allows developers to connect their programming languages to the document so that they can perform tasks on that document. The document and its content can be modified, styled or removed using programs. A very common example for a document is a web page. The DOM represents the content of a web page as objects and nodes, so developers can use a scripting language like JavaScript to perform desired tasks on a web page. This allows the addition, modification, or removal of content from pages using such languages.

![dom@2x](https://iq.opengenus.org/content/images/2019/10/dom@2x.png)

`Window` is one of the interfaces of the DOM that represents a window which contains the document. If a user opens a web page in a browser, that tab which includes the web page is represented by a `Window` object. This object contains its own events, properties and methods. It also includes some inherited properties. Some familiar methods that belong to this object are `alert()`, `prompt()` and `resizeTo()`. Some properties include `Window.document`, `Window.console` and `Window.navigator`. Most properties of this object are read-only (un-modifiable).

The `navigator` property of the `Window` object returns a reference to the `Navigator` object which contains information about the browser or user agent. It's a read-only property and can be accessed using `window.navigator`. It's supported by all the major browsers. The `navigator` object contains properties and methods that allow programming scripts to run and understand more information about how that programs is used, how efficient it is on certain user agents and so on.

Some of the properties include:

#### appName (window.navigator.appName)

This API returns a string of the official name of the browser. It usually returns "Netscape" in most of the major browsers, more particularly the modern versions of those browsers.

```javascript
console.log(window.navigator.appName);
// Logs "Netscape" if user is on any one
// of these browsers: Chrome, Firefox, IE11+
```

#### appVersion (window.navigator.appVersion)

This is a similar API as the previous one but it returns a string of the version of the browser.

#### userAgent (window.navigator.userAgent)

This is also a similar API that specifies the complete user agent of the browser as a string. The return value is composed of other different properties of the `navigator` like `appName`, `appVersion`, `platform` and so on.

#### cookieEnabled (window.navigator.cookieEnabled)

This property returns a Boolean value that indicates whether or not cookies are enabled or allowed. For example, when you read articles from sites like _The New York Times_ or _Wired_, the service uses cookies to track how many articles a person has read. They can't read more than 3 or 5 articles. They get locked out of reading another article after that and that person has to pay the subscription fees in order to read more. Sites like these use this property to check if cookies are enabled before proceeding. This is the reason why reading full articles is usually forbidden while running your browser in private mode because the browser sets the `cookieEnabled` property to `false` when in incognito mode. Another example for this is when you try to use third-party logins like Google and Facebook. These forms of authentication don't work if cookies are disabled.

```javascript
if (!navigator.cookieEnabled) {
  alert("Please enable cookies to continue signing in.");
}
```

#### geolocation (window.navigator.geolocation)

This returns the position of the user's device. It could be used to customize and deliver services that are more relevant to the user based on the location.

#### language (window.navigator.language)

This returns the preferred language of the user, which is usually the language of the browser in use, as a string. It allows services to be delivered in the user's preferable language.

#### onLine (window.navigator.onLine)

This property returns a boolean value of the online status of the browser. It can be applicable in some offline-capable services. For example, when performing tasks such as writing online, users can continue writing even if the connection drops. The site can then continue to add up the changes to a file and save or upload them when the connection restores.

#### permissions (window.navigator.permissions)

This returns the Permissions object which allows developers to request, collect and store permissions for various APIs for better user experience. As of the date for writing this article, it's an experimental feature.

#### platform (window.navigator.platform)

This returns the platform that the current browser is running whether it is Windows, macOS or any other platform. Example values include "", "MacIntel", "Win32", and "WebTV OS". The value can also be an empty string.

#### doNotTrack (window.navigator.doNotTrack)

You are probably aware of the "Do Not Track / DNT" setting in your browser which notifies websites your preference on tracking for analytics or advertisement purposes. This non-standard property is responsible for displaying your tracking preferences. It returns either one of the following: "1" if opt-out of tracking, "0" if DNT is disabled, or "unspecified" otherwise.

All of the previous properties listed are read-only properties. They can't be manipulated by websites.

Most of the previous properties like `appVersion`, `userAgent` and `appName` can be used by many websites in a method called browser fingerprinting which is used to track users and form unique fingerprints of them, so they can deliver personalized ads or perform analytics tasks. If cookies are disabled and/or DNT is enabled, ad serving websites revert to this method to track users behavior across sites. Some privacy-focused browsers tend to return fake values for these properties to protect the privacy of their users. Some browsers might also return fake values to these properties, so they can provide an equal user experience.

The `Navigator` object also includes methods like:

- `share()` - calls the native sharing process for that platform,
- `javaEnabled()` - checks whether java is enabled in the browser or not, and
- `vibrate()` - if available, vibrates device.

### Examples

#### Log the basic properties of your browser

```javascript
console.log(`
    Browser Name: ${navigator.appName}
    Browser Version: ${navigator.appVersion}
    Cookies Enabled: ${navigator.cookieEnabled}
    Browser Language: ${navigator.language}
    Browser Online: ${navigator.onLine}
    Platform: ${navigator.platform}
    User-agent header: ${navigator.userAgent}
`);
```

This outputs something like:

```
    Browser Name: Netscape
    Browser Version: 5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36
    Cookies Enabled: true
    Browser Language: en-US
    Browser Online: true
    Platform: Win32
    User-agent header: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36
```

#### Load different site versions depending on browser

Any web developer knows supporting compatibility among browsers is a tedious job. Writing code that supports all features of an app or website is hard to implement without making sacrifices, especially if you are in the early stages of developing a product.

```javascript
const browser = window.navigator.appName;

const loadForNetscape = () => {
  // Code to load URL or redirect to
  // sites specifically designed for:
  // Chrome, Firefox and IE11+
};

const loadForOpera = () => {
  // Code to load URL or redirect to
  // sites specifically designed for Opera
};

const loadForUnsupported = () => {
  const errorMsg = `
        Sorry, we are not yet supported on your browser.
        Consider switching to a Firefox or Chromium based browser.
    `;
  alert(errorMsg);
};

if (browser === "Netscape") {
  loadForNetscape();
} else if (browser === "Opera") {
  loadForOpera();
} else {
  loadForUnsupported();
}
```
