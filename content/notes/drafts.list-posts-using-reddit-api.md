---
id: 7mv6i3hak2n6nrw8enqxbvy
title: Get List of Posts in a Subreddit Using the Reddit API
desc: ""
updated: 1692301128289
created: 1692301019405
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

This article talks about using JavaScript to **get posts from a subreddit using the Reddit API**. We are going to use [listings](https://www.reddit.com/dev/api) in the Reddit API and the web API `fetch()` to make the API calls to a random subreddit. I have explained how to use `fetch()` in more detail [here](https://iq.opengenus.org/intro-to-fetch-api/).

But to review, `fetch()` is a web API that allows developers to request certain resource from an endpoint. It takes the path to the resource as an argument and returns the resource in either of the various formats available like JSON or XML. In the case of Reddit, our URL/path to the resources we want is 'www.reddit.com' followed by '/r/<_subreddit_>/<_listing_>'.

For this article I have chosen the [**r/javascript**](https://www.reddit.com/r/javascript/) _subreddit_ to fetch different variants of posts. According to the Reddit API, we can fetch different types of posts:

- new (new posts)
- top (top posts based on upvotes)
- rising (posts with most recent interactions)
- random and so on.

These values are the _listings_.

The syntax to perform the fetch is very simple and straight forward.

```javascript
fetch("https://www.reddit.com/r/javascript/hot.json")
  .then(function (res) {
    return res.json(); // Convert the data into JSON
  })
  .then(function (data) {
    console.log(data); // Logs the data to the console
  })
  .catch(function (err) {
    console.log(err); // Log error if any
  });
```

**Let's break it down**

The path used above fetches **hot** posts from the **JavaScript** subreddit. The `then()` function below converts the response to JSON format and passes it to the next `then()` function which logs the data. The catch() function logs errors if there are any. Of course, this is a simple example to show how it works. And I will demonstrate how to **use the returned value to render the results onto a page**.

**Note:** Fetching resources across a different domain is usually restricted for security reasons. Hence, we are going to use a CORS proxy to allow us to use the API. There are a number of proxies out there like [CORS Anywhere](https://cors-anywhere.herokuapp.com/) and [crossorigin.me](https://crossorigin.me/). These work by simply adding them before the path to fetch() like `https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/javascript/hot.json`. There are also packages like [axios()](https://www.npmjs.com/package/axios) that can be installed when working on a project. But for the sake of simplicity, we are going to use the CORS Anywhere proxy.

Let's build our basic HTML page where we are going to load our posts:

1. We create a dropdown menu for the users to select what type of posts they want to view. We are going to show posts based on these selected values.

```html
<label>Post Type:</label>
<select class="post-type">
  :
  <option value="hot" selected>Hot</option>
  <option value="new">New</option>
  <option value="top">Top</option>
  <option value="random">Random</option>
  <option value="rising">Rising</option>
  <option value="controversial">Controversial</option>
</select>
```

2. We create a 'container' element that's going to include the list of posts and inside the container is a 'post' which is going to link to the original post on Reddit. By looking at the JSON output we got, the only relevant parts for a post are the author(poster), the title and the content. Therefore, each post contains a title, some form of content and the author's username which we can get from our JSON.

```html
<div class="post-container">
  <h3>hot posts from r/JavaScript</h3>
  <a class="post" href="{original link for post goes here}">
    <div class="title">{title}</div>
    <div class="content">{content}</div>
    <div class="author">{author}</div>
  </a>
  <a class="post" href="{original link for post goes here}">
    <div class="title">{title}</div>
    <div class="content">{content}</div>
    <div class="author">{author}</div>
  </a>
  ...
</div>
```

This HTML code is only to show the structure of the project we are going to build. We are going to use fetch() to dynamically fill the container with posts containing the information obtained from the Reddit API.

3. I have added the CSS code below to make the output more organized. Since the point of this article is to demonstrate JavaScript, I haven't added any explanations here. You can view the source code which contains CSS on [JSFiddle here](https://jsfiddle.net/2wosubq0/8) and the embedded code at the bottom of this page.

```css
* {
  box-sizing: border-box;
  text-decoration: none;
  font-family: sans-serif;
  word-break: break-all;
  outline: none;
}

.options {
  width: 165px;
  margin: 0 auto;
  font-weight: bold;
}

select {
  width: 75px;
  height: 40px;
  border-radius: 5px;
}

.post-container {
  width: 95%;
  height: auto;
  padding: 5px;
  margin: 15px auto;
  border-radius: 5px;
  background-color: #eee;
}

h3 {
  text-align: center;
}

.post {
  width: 95%;
  height: auto;
  display: block;
  padding: 10px;
  background-color: #fff;
  color: #000;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 3px 3px 5px #ddd;
}

.post > * {
  display: block;
  margin: 5px;
  font-size: 16px;
}

.author {
  font-style: italic;
  font-size: 12px;
}

.title {
  font-weight: bold;
}

.content span {
  color: lightblue;
}
```

4. To be able to render our posts, we should be able to understand the structure of the response we get. The output of a regular fetch to one of our endpoints has a complicated nested structure. If `res` is our response object, the list of posts we want can be found in an array that is at `res.data.children`:

```javascript
    {
       kind: "Listing",
       data: {
          ...
          children: [
              {kind: "t3", data: {...}}
              {kind: "t3", data: {...}}
              {kind: "t3", data: {...}}
              ...
          ]
          ...
       }
    }
```

All the information about a particular post is in each object in this array. More specifically, it is inside the nested object (`data`, not to be confused with `res.data`):

```javascript
    ...
    children: [
       {
          kind: "t3",
          data: {
             author: "opengenus",
             permalink: "/r/OpenGenus/comments/6zup36/best_student_discount_services_one_should/",
             selftext: "",
             title: "Best student discount services one should definitely try out!",
             downs: 0,
             ups: 21,
             url: "https://github.com/OpenGenus/Best-student-discount-services"
          }
       }
       ...
    ]
    ...
```

5. We want our posts to be shown based on the dropdown option we have currently selected. Let's design our function based on that. Let's call the function `renderPosts()`.

Our function is going to:

- take the post type as an argument (e.g. new, hot, random,...)
- loop through `children` array & render each post to our container.
- Log an error message if an error occurs

```javascript
const container = document.querySelector(".post-container");

const renderPosts = (postType) => {
  // Our proxy that makes cross origin fetching possible
  const proxy = "https://cors-anywhere.herokuapp.com/";

  fetch(`${proxy}https://www.reddit.com/r/javascript/${postType}.json`)
    .then(function (res) {
      // Return the response in JSON format
      return res.json();
    })
    .then(function (res) {
      // We render our posts to the UI in this block
      let currPost,
        markup = ``;

      // The array that contains our posts
      const postsArr = res.data.children;

      // Add a header based on post type
      markup = `<h3>${postType} posts from r/JavaScript</h3>`;

      // Iterate through our posts array and chain
      // the markup based on our HTML structure
      for (let i = 0; i < postsArr.length; i++) {
        currPost = postsArr[i].data; // a single post object
        markup += `
                <a class="post" href="https://www.reddit.com/${currPost.permalink}">
                   <div class="title"> ${currPost.title} </div>
                   <div class="content"> 
                       ${currPost.selftext} 
                       </br></br>
                       <span>${currPost.url}</span>
                   </div>
                   <div class="author"> Posted by ${currPost.author} </div>
                </a>
             `;
      }
      // Insert the markup HTML to our container
      container.insertAdjacentHTML("afterbegin", markup);
    })
    .catch(function (err) {
      console.log(err); // Log error if any
    });
};
```

6. We can then add an event listener to the dropdown menu that fires when there is a change detected. If there is a change, we pass the selected value to our `renderPosts()` function so the list of posts gets updated.

```javascript
const dropdown = document.querySelector(".post-type");

dropdown.addEventListener("change", () => {
  // Gets the currently selected option index
  let index = dropdown.selectedIndex;
  // Gets the currently selected option value
  let value = dropdown.options[index].value;

  // Pass the value to our function
  // which performs the rendering
  renderPosts(value);
});
```

7. The final output looks something like this:

![screen-1](https://iq.opengenus.org/content/images/2019/11/screen-1.png)

That's it! For the sake of simplicity, I have only used the properties that are relevant to be added to the user interface. The response typically contains a lot of other properties that can be used when a user is authenticated. For instance, if you are building a Reddit client of your own, these features may become necessary.

### Challenge for the reader

The source code for this example can be found [here](https://jsfiddle.net/2wosubq0/8) or it's embedded above. Modify it to add the number of 'upvotes' and 'downvotes' for each post. Have a look at the output again and add the necessary lines of code (in both HTML and JavaScript) to include these values. _Hint: Add two elements below div.author to the markup, one for upvotes and one for downvotes. Then, use the appropriate syntax to access these values from your data and add them to their respective markup._ You can further this challenge by adding a second dropdown menu that helps the user select a subreddit of their own choice. Enjoy!

### References

- [Reddit API](https://www.reddit.com/dev/api)
- [A Simple Introduction to Fetch API](https://iq.opengenus.org/intro-to-fetch-api/).
