---
id: 596qr6314ds3ofacam7d2y8
title: A Simple Introduction to the JavaScript Fetch API
desc: ""
updated: 1692301317647
created: 1692301222983
tags:
  - TAG_1
  - TAG_2
  - TAG_3
image: /content/cover/COVER-IMAGE.png
description: SHORT BLOG DESCRIPTION
head:
  meta:
    - name: robots
      content: "index, follow"
    - name: author
      content: Dawit (@oneminch)
    - property: "og:type"
      content: article
    - name: "twitter:card"
      content: summary_large_image
---

Imagine a scenario where you enter a coffee shop. You go to your barista and ask for a frappuccino. The barista enters your order on their computer or passes your order along to the other barista. After making your payment, you then wait for your order to come. If it comes, you can start enjoying your coffee. And if there was a miscommunication between you and the barista, you might get a drink you didn't intend to order.

This is analogous to requesting and retrieving data in programming. One of the ways to perform this task in JavaScript is the **fetch()** API. The **fetch()** API allows programmers to retrieve data from a certain endpoint. It mainly deals with requesting some data or resource from an endpoint and once a response is received, developers can use it for building things.

In the above analogy:

- Your order can be regarded as the _request_
- The _endpoint_ is the barista at the coffee shop.
- The coffee here is equivalent to the _data/resource_ we want to retrieve.
- A successful order is a _resolve_.
- A miscommunication can lead to you getting the wrong drink which is an _error_.

![Untitled-1-](https://iq.opengenus.org/content/images/2019/09/Untitled-1-.png)

## Diving deeper into fetch()

**What it takes as a parameter**: the URL/path to the data you want to fetch  
**What it returns**: a 'Promise' (which is a result that is expected to arrive) that resolves to a 'Response'

When requesting a resource using fetch, it is mandatory to enter the URL or path to that resource. For example, GitHub offers an API to retrieve some data about its users. We can use that to demonstrate how it works.

```javascript
// JavaScript Code

fetch("https://api.github.com/users").then(function (res) {
  /* Code to be executed */
});
```

In this case the '[https://api.github.com/users](https://api.github.com/users)' is the path to the resource we want to fetch. This particular URL returns or resolves basic information about 30 GitHub users in the form of a JavaScript object.

After sending the request, a Promise is returned. A Promise is an object that results in a value some time in the _future_. It can be in 3 possible states: _pending_, _fulfilled_, or _rejected_.

- **Fulfilled**: is a state where the request has been handled successfully and a response is sent back.
- **Rejected**: is a state where the request has been denied access to that resource or when there is a network error.
- **Pending**: is a state where the request is sent and it isn't fulfilled or rejected yet.

When a Promise is fulfilled, the `then()` method can be called to deal with what happens next. It takes in the response received from the request as an argument. The code that is to be executed on this response goes in this block. This method can be concatenated or chained on top of each other to perform a series of tasks which execute once the corresponding previous `then()` block has finished executing. It follows the order of "Let this block finish executing...then execute this...then execute that...". Going back to our previous example, after retrieving our user list data from the GitHub API, we can convert that data into JSON format. Then we can simply log it to the console or write a function that could display this data on an HTML page.

```javascript
// JavaScript Code

fetch("https://api.github.com/users")
  .then(function (res) {
    return res.json(); // Convert the data into JSON
  })
  .then(function (data) {
    console.log(data); // Logs the data to the console
    return data;
  });
```

A Promise can get rejected for any of these reasons: the resource/data we requested didn't exist, we're not authorized to access, it or we just simply used the wrong URL. In such a case, an error will occur. It is important that these errors are dealt with. That's where the `catch()` block comes in. The `catch()` block takes an error object as an argument. The `catch()` block is chained at the end of the then() blocks and it is where error handling is performed.

```javascript
// JavaScript Code

fetch("https://api.github.com/users")
  .then(function (res) {
    return res.json(); // Convert the data into JSON
  })
  .then(function (data) {
    console.log(data); // Logs the data to the console
  })
  .catch(function (error) {
    console.log(err); // Logs an error in case there is one
  });
```

### A few more examples

This code uses a fake REST API called [JSONPlaceholder](https://jsonplaceholder.typicode.com/). According to the documentation of this API, a fetch request returns an array of objects. In this particular case, the code fetches a fake user(object) from a list(array) of users but it only returns the one with an `id` of 2.

#### CODE:

```javascript
// JavaScript Code

fetch("https://jsonplaceholder.typicode.com/users/2")
  .then(function (res) {
    return res.json(); // Convert the data into JSON
  })
  .then(function (data) {
    console.log(data); // Logs the data to the console
  })
  .catch(function (error) {
    console.log(err); // Logs an error in case there is one
  });
```

#### OUTPUT:

```javascript
    {
        "id":2,
        "name":"Ervin Howell",
        "username":"Antonette",
        "email":"Shanna@melissa.tv",
        "address":{
            "street":"Victor Plains",
            "suite":"Suite 879",
            "city":"Wisokyburgh",
            "zipcode":"90566-7771",
            "geo":{"lat":"-43.9509","lng":"-34.4618"}
        },
        "phone":"010-692-6593 x09125",
        "website":"anastasia.net",
        "company":{
            "name":"Deckow-Crist",
            "catchPhrase":"Proactive didactic contingency",
            "bs":"synergize scalable supply-chains"
        }
    }
```

From the output, it's clear that a user is an object with a set of properties. From this data we can continue to join other `then()` blocks to further access the data we want.

```javascript
    // JavaScript Code

    ...
    .then(function(data) {
        const name = data.name;
        const compName = data.company.name;
        const website = data.website;
        console.log(
            `My name is ${name}. I work at ${compName}.
            For more info, you can visit my blog @ ${website}`
        );
    })
    ...
```

#### OUTPUT:

```
My name is Ervin Howell. I work at Deckow-Crist.
For more info, you can visit my blog @ anastasia.net.
```

As you can see, requests of this type can be very useful for developers. It helps programmers avoid building everything from scratch and allows them to use these tools as an extension or part of their products.

## References

[Fetch API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)  
[Introduction to fetch() - Google Developers](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
