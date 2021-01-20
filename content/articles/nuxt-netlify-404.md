---
title: "Creating 404 pages with Nuxt and Netlify"
description: A walk through on setting up my 404 page
img: /img/404-blue.png?nf_resize=fit&w=751&h=563
alt: Creating 404 pages with Nuxt and Netlify
created: "2021-01-19T10:58:51.640Z"
---
404 pages have always been those gems on the internet that I like to dig for. If a site has good design or an interesting voice, I'll usually type in incorrect urls to see what they've come up with for their 404. As a site owner, you don’t really want people to land on a 404, but you might as well give them a smile if they do. There are a ton of “best 404s on the internet" articles out there, so feel free to leave here and do some error page browsing. 

Still here? Well, ok then.

With all of that in mind, I decided to create [my own custom 404 page](/404). If you've read all of my posts or looked at my footer or [followed me on Twitter](https://twitter.com/iamweswilson), you might have stumbled into what my site is built on: [Nuxt Content](https://content.nuxtjs.org/), hosted on [Netlify](https://netlify.com). I share this again because it gives important context to the rest of this post. If you don't use either of those, a lot of the info to follow is not relevant to you... and you should use both of those.

### First, know you're environment
One of the great things about Netlify is that they provide so many goodies from the very start. For example, without doing anything special Netlify provides your site with a 404 page. It’s actually a well executed page with a clean design and straightforward language. It has the minimal functionality needed baked in if you don’t want to create your own.

![Netlify's default 404 page](/img/404-post/netlify-404.png?nf_resize=fit&w=751&h=563)

Since I wanted to create my own custom page, I needed to take a few additional steps.

### Step 1: Create an error page
If you don’t already have an `error.vue` layout, you’ll want to create it. By default, Nuxt displays this component anytime a non server-side rendering error occurs. So if someone runs into a 404 or a 500, this page will be displayed.

The error template is rendered like any other component, meaning you can put almost anything you want in it, including `v-if` statements to tell the component what to show depending on the status code. For example, if you want to show something specific for 404 errors, you’ll use `v-if=“error.statusCode === 404”`. For example:

```
<div v-if="error.statusCode === 404">
  What people will see when they receive a 404
</div>
<div v-else>
  What they'll see with any other error code
</div>
```

You can find more documentation on this [here](https://nuxtjs.org/docs/2.x/concepts/views/#error-page)

This works flawlessly in a local environment, but when you deploy to Netlify you still get their default 404 page. Let's fix that.

### Step 2: Tell Netlify what do when when there’s an error
This is covered thoroughly in the [Nuxt docs](https://nuxtjs.org/faq/netlify-deployment/), so I’ll copy and paste the relevant part:

> For a single page app there is a problem with refresh as by default on Netlify the site redirects to “404 not found”. For any pages that are not generated they will fallback to SPA mode and then if you refresh or share that link you will get Netlify’s 404 page. This is because the pages that are not generated don’t actually exist as they are actually a single page application so if you refresh this page you will get a 404 because the url for that page doesn’t actually exist. By redirecting to the 404.html Nuxt will reload your page correctly in SPA fallback.

The solve for this is pretty straightforward. Add the following `generate` property to your `nuxt.config.js` file, like so:

```
generate: {
	fallback: true
}
```

Now the `error.vue` layout will be displayed for any pages on your site when deployed to Netlify as well.

### Step 3: But what about those blog posts?

Now that I had first-level pages working, I noticed anything behind the `/blog/` folder didn’t react in the same way. Instead of going to the error page, the site just broke. Not ideal. Posts are found, sorted, and fetched by `_slug.vue` . The script in that component does the dirty work, basically looking for any files within the content/articles folder:

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

After some digging, I realized things were breaking because I didn’t tell the blog component to do anything with errors.  So if an article isn’t found, the component breaks. I needed to take advantage of the async function and add a `catch` to handle the error. If no article is found, return a 404 error. Here’s the relevant part of the function:

```
 catch (err) {
    error({
      statusCode: 404,
      message: ‘Page could not be found’,
    })
  }
```

And here’s the full function for reference. Notice the addition of of your faithful async friends: `try` and `catch`.

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

After this, the full site should be able to redirect you to the error layout when necessary.

### Step 4: Create the content
Now that I have the functionality in place, I get to do the fun stuff. I won’t go too deep into this since your page will be different, but will share a few of my learnings in this process. I wanted to accomplish two main things with my 404 page: **1) be creative** and **2) find broken links**.

**To accomplish #1**, I decided to illustrate myself. I've been enjoying learning how to illustrate emotions in a human face and I've never tried to draw myself before. Hopefully this would add a little personality to the page in the process. I'm pretty pleased with the final result, but it took an iteration or two to get there. I created a version before this, seen below, but Twitter quickly told me it was "alarming" and implied more than it should. You can use your imagination on why. Luckily, this is why you beta test.

![Take one: alarming 404](/img/404-post/alarming-404.jpg?nf_resize=fit&w=751&h=563)

After that feedback, I decided to close his mouth and instead make the character's head the "0" in the 404. ***Much better.***

![Final 404 illustration](/img/404-post/final-404.png?nf_resize=fit&w=751&h=563)

**To accomplish #2**, I wanted to make it very easy to share when a page is broken. I got the idea from [Jason Lengstor's 404 page](https://www.jason.af/404), who's functionality opens a prefilled Github issue. I loved that idea, but decided to use email instead, hoping it's a bit more universal for non-tech folks.

To do this, I added subject and body parameters to `mailto` link. So when you click it, the user's default mail client will open with a prepopulated subject and body. 

```
<a :href="'mailto:' +  'wes@iamweswilson.com?subject=I found a broken link!&body=Hey Wes,%0D%0A%0D%0AI found a broken link on your site. The page was supposed to be at' + ' ' + 'iamweswilson.com/' + currentURL">
```

You'll notice that I'm sending the current page in the body of the email through a variable called `currentURL`. That's created through a simple computed function using `$route` that's conveniently provided by Vue. In full, `this.$route.fullPath` grabs the url of the page you're currently on. The function looks like this:

```
computed: {
  currentURL: function() {
    return this.$route.fullPath
  }
}
```

Feel free to poke around the [final 404 page on Github](https://github.com/iamweswilson/personal-blog/blob/main/layouts/error.vue) and share any improvements!

Want to see how the prepopulated email works AND tell me you finished this post? 
<a href="mailto:wes@iamweswilson.com?subject=I read your 404 post!&body=Hey Wes,%0D%0A%0D%0AI've made it this far reading your 404 post. What do I win?">Just click here</a>