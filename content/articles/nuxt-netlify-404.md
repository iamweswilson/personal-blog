---
title: "Creating 404 pages with Nuxt and Netlify"
description: A walkthrough on setting up my 404 page
img: /img/404-blue.png?nf_resize=fit&w=751&h=563
alt: Creating 404 pages with Nuxt and Netlify
created: "2021-01-19T10:58:51.640Z"
---
404 pages have always been a gem on the internet that I like to explore. I often find myself typing in incorrect urls on sites just to see what creativity folks have come up with. You don’t really want people to land on a 404, but you might as well give them a smile if they do. There are a ton of “best 404 pages” articles on the internets, so feel free to leave here and do some browsing. 

Still here? Well, ok then.

In that spirit, I decided to create [my own custom 404 page](/404). If you read all of my posts, you might have stumbled into what my site is built on. And since you haven’t, I’ll share here :) This site is built on [Nuxt Content](https://content.nuxtjs.org/) and hosted on [Netlify](https://netlify.com), which is important to know if you want a 404 page to work correctly.

By default, Netlify displays its own 404 page. It’s actually a well done page, with a clean design and has the minimal functionality needed baked in if you don’t want to create your own.

![Netlify's default 404 page](/img/404-post/netlify-404.png?nf_resize=fit&w=751&h=563)

Since I wanted my own, I needed to take a few steps.

### Step 1: Create an error page
If you don’t already have an `error.vue` component, you’ll want to create it. By default, Nuxt will displays this component anytime an error occurs. That means it will show if someone runs into a 404 or a 500 or any other non server-side rendering error.

The error component is rendered like any other component, meaning you can put almost anything you want in it. It also means you can use `v-if` statements to tell the component what to show depending on the status code. For example, if you want to show something specific for 404 errors, like I do, you’d use `v-if=“error.statusCode === 404”`. For example:

```
<div v-if="error.statusCode === 404">
  What people will see when they receive a 404
</div>
<div v-else>
  What they'll see with any other error code
</div>
```
You can find full documentation on this [here](https://nuxtjs.org/docs/2.x/concepts/views/#error-page)

### Step 2: Tell Netlify what do when when there’s an error
This is covered thoroughly in the [Nuxt docs](https://nuxtjs.org/faq/netlify-deployment/), so I’ll copy and paste the relevant part:

> For a single page app there is a problem with refresh as by default on Netlify the site redirects to “404 not found”. For any pages that are not generated they will fallback to SPA mode and then if you refresh or share that link you will get Netlify’s 404 page. This is because the pages that are not generated don’t actually exist as they are actually a single page application so if you refresh this page you will get a 404 because the url for that page doesn’t actually exist. By redirecting to the 404.html Nuxt will reload your page correctly in SPA fallback.

The solve for this is pretty straightforward. Add the following `generate` property to your `nuxt.config.js` file, like so:

```
generate: {
	fallback: true
}
```

Now `error.vue` will be displayed as desired for any existing or not-existing pages on your site.

### Step 3: But what about those blog posts?

Now that I had first-level pages working, I noticed anything behind the folder `blog/` didn’t react in the same way. Instead of going to the error page, the site just broke. Not ideal. Posts are found, sorted, and fetched by `_slug.vue` . The script in that component does the dirty work, basically looking for any files within the content/articles folder:

```
  async asyncData({ $content, params, error }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('created', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next
    }
  }
```

After some digging, I realized this was because I didn’t tell the blog component to do anything with errors.  So if an article isn’t found, the component breaks. So I needed to take take advantage of the async function and add a `catch` to handle the error. If no article is found, return a 404 error. Here’s the relevant part of the function:

```
 catch (err) {
    error({
      statusCode: 404,
      message: ‘Page could not be found’,
    })
  }
```

And here’s the full function for reference:

```
  async asyncData({ /$content/, /params/, /error/ }) {
    try {
      const article = await $content(‘articles’, params.slug).fetch()
      const [prev, next] = await $content(‘articles’)
        .only([‘title’, ‘slug’])
        .sortBy(‘created’, ‘asc’)
        .surround(params.slug)
        .fetch()
      return {
        article,
        prev,
        next
      }
    } catch(err) {
      error({
        statusCode: 404,
        message: ‘Page could not be found’,
      })
    }
  },
```

Now the full site should be able to redirect you to the error component when necessary.

### Step 4: Create the content
Now that I have the functionality in place, I get to do the fun stuff. I won’t go too deep into this since your page will be different, but will share a few of my learnings in this process. I want to accomplish two main things with my 404 page: 1) be creative and 2) find broken links.

**To accomplish #1**, I decided to illustrate myself, hopefully adding a little personality to the page. You can see the final result on the [404 page](/404) and at the top of this page. What you don't see is the first version I shared, which Twitter quickly told me was "alarming" and implied more than it should. This is why you beta test.

![Take one: alarming 404](/img/404-post/alarming-404.jpg?nf_resize=fit&w=751&h=563)

After that feedback, I decided to close his mouth and instead made the character's head the "0" in the 404.

![Final 404 illustration](/img/404-post/final-404.png?nf_resize=fit&w=751&h=563)

**To accomplish #2**, I decided to make it very easy to share when I page is broken. I got the idea from [Jason Lengstor's 404 page](https://www.jason.af/404), who's functionality actually files a Github issue. I decided to use email instead, hoping it's a bit more universal for non-tech folks.

To do this, I decided to prepopulate the subject and body in a `mailto` link.

```
<a :href="'mailto:' +  'wes@iamweswilson.com?subject=I found a broken link!&body=Hey Wes,%0D%0A%0D%0AI found a broken link on your site. The page was supposed to be at' + ' ' + 'iamweswilson.com/' + currentURL">
```

The `currentURL` is computed in the component using the router function provided by Vue. `this.$route.fullPath` grabs the url of the page you're currently on. The computed function looks like this:

```
computed: {
  currentURL: function() {
    return this.$route.fullPath
  }
}
```

Feel free to poke around the [final 404 page on Github](https://github.com/iamweswilson/personal-blog/blob/main/layouts/error.vue) and share any improvements!