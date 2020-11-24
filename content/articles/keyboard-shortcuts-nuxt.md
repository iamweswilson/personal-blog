---
title: "Adding keyboard shortcuts to Nuxt"
description: More code fun, navigating posts
img: /img/shortcuts.jpg?nf_resize=fit&w=751&h=563
alt: Keyboard shortcuts
created: "2020-11-24T10:58:51.640Z"
---

In my ongoing journey create new things and learn something new I decided to add keyboard shortcuts to my site, allowing luckily visitors like you to navigate from one blog post to the other using left and right arrow keys. Let's dive in!

### Step 1: 
Install [Vue-Shortkey](https://github.com/iFgR/vue-shortkey). I saw a couple of options for binding keys to components in Vue, [hotkey](https://github.com/Dafrok/v-hotkey) and shortkey, specifically. I'm honestly not clear on the differences between the two, but I decided to install shortkey because the community seemed more active in the repo.

```
yarn add vue-shortkey
```

I actually ran into a silly issue here when I started the process, because I used npm instead of yarn to install. Don’t mix package managers, kids.

### Step 2 (Specific to Nuxt):
If you’re using nuxt.js (like I am), you’ll need to pull vue-shortkey in as a plugin. You can do this by creating a new file `/plugins/vue-shortkey.js` and add the following to it. You’ll see in this example, shortkey is disabled when the user is in inputs or textareas, using a `prevent` method.

```
import Vue from ‘vue’
const ShortKey = require(‘vue-shortkey’)

// add any custom shortkey config settings here
Vue.use(ShortKey, { prevent: [‘input’, ‘textarea’] })

export default ShortKey
```

Then load the plugin in `nuxt.config.js` by adding the following code to the plugins section.

```
plugins: [{ src: ‘@/plugins/vue-shortkey.js’, mode: ‘client’ }]
```

For reference, `mode: 'client'` prevents Nuxt from loading the plugin during server-side rendering.

### Step 3:
Define shortcuts and add them to the component where Previous and Next functions are defined. As I've mentioned in previous articles, my site is based on the [Nuxt Content](_https://nuxtjs.org/blog/creating-blog-with-nuxt-content/_) blog example. I've modified it along the way, but the base functionality is the same. They brilliantly included a function that creates [previous / next navigation](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/#creating-a-previous-and-next-component) at the bottom of each page through a component named `PrevNext.vue`. You can modify that component to listen for hotkeys like so:

```
<NuxtLink
        v-shortkey.once=“[‘arrowleft’]”
        v-if=“prev”
        :to=“{ name: ‘blog-slug’, params: { slug: prev.slug } }”
        class=“w-1/3 xs:w-1/2 text-primary font-bold hover:underline”
        @shortkey.native=“navigate(prev.slug)”
      >
        {{ prev.title }}
</NuxtLink>
```

This is for the “previous” link. The relevant pieces for shortkey are:

- `v-shortkey.once=“[‘arrowleft’]”`  defines the left arrow as the key used, and `.once` tells the function to only run one time instead of it being called repeatedly.
- `@shortkey.native=“navigate(prev.slug)”` tells shortkey to call the `navigate` method defined below, navigating to the `prev.slug` url.

Then add the following method after the `props` defined in the script at the bottom of the component:

```
  methods: {
    navigate(to) {
      this.$router.push(to);
    },
  }
```

Combined, it would look like this:

```
<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    },
    methods: {
      navigate(to) {
        this.$router.push(to);
      },
    }
  }
</script>
```

Viola, keyboard shortcuts should be working. Left arrow to see the previous article, right arrow to see the newer one.

Go ahead, try it. Click your left arrow &larr;