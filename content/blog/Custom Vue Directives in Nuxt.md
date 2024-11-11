---
id: register-custom-vue-directives-in-nuxt
title: How to Register Custom Vue Directives in Nuxt
description: This article goes over how to register custom directives globally in a Nuxt 3 application.
tags:
  - nuxt
  - vue
  - plugins
image: /content/cover/register-custom-vue-directives-in-nuxt.png
published_on: "2024-11-11"
head:
  meta:
    - name: robots
      content: index, follow
    - name: author
      content: Dawit (@oneminch)
    - property: og:type
      content: article
    - name: twitter:card
      content: summary_large_image
---

## TL;DR

Create a plugin file in your `plugins/` directory, which is where we'll have access to our Vue app instance.

We can define and register our custom directive there:

```ts
// ~/plugins/my-directives.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("highlight", {
    mounted(el, binding) {
      el.style.backgroundColor = binding.value;
    }
  });

  // Register more directives as needed
});
```

:divider

## In Detail

In Vue, directives are special attributes on HTML elements that are used to extend and manipulate their behavior. Vue provides several built-in directives:

- `v-bind` - used to dynamically bind an attribute to a JavaScript expression,
- `v-on` - used to attach event listeners to elements,
- `v-if`/`v-else-if`/`v-else` - used to conditionally render elements,
- and so much more.

For more specific and advanced use cases, Vue provides a way to create custom directives. These can be particularly useful for lower-level DOM manipulations.

In a plain Vue app, to register custom directives at the app level, we can attach it to our app instance as such:

```ts
const app = creatApp({});

app.directive("highlight", {
  mounted(el, binding) {
    el.style.backgroundColor = binding.value;
  }
});
```

We can then use the directive on any element globally within our app:

```html
<p v-highlight="'yellow'">This text will be highlighted!</p>
```

### How about in Nuxt?

To achieve the same functionality in Nuxt, we will need access to our Vue app instance, and we can use a plugin to do so.

Plugins in Nuxt can be used to add functionality to an application at the Vue app level. They get loaded and executed when the Vue app is created, and files inside the `plugins/` directory of a Nuxt app are automatically registered as plugins by Nuxt.

In Nuxt, we can create a plugin file in the `plugins/` directory, which we can use to globally define and register our custom directives:

```ts
// ~/plugins/my-directives.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("highlight", {
    mounted(el, binding) {
      el.style.backgroundColor = binding.value;
    }
  });

  // Register more directives as needed
});
```

Our plugin function has access to the Nuxt app context, which has a `vueApp` property containing our Vue app instance. We can directly register our directives on this property and have it globally available throughout our app.

It's important to note that, to avoid issues with server-side rendering (SSR), our plugin file should not contain a `.client` or `.server` suffix when used to register directives.

That's it. Thanks for reading.
