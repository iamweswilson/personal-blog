<template>
  <div>
    <section class="my-24 text-center">
      <div v-if="error.statusCode === 404">
        <h1>404</h1>
        <p>Looks like the url you tried to find isn't actually a url. Could be my fault, could be yours. If you ended up on this page by clicking on a link somewhere, please 
        <a :href="'mailto:' +  'wes@iamweswilson.com?subject=I found a broken link!&body=Hey Wes,%0D%0A%0D%0AI found a broken link on your site. The page was supposed to be at' + ' ' + currentURL">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 inline">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          let me know
        </a> so I can fix it.</p>
      </div>
      <div v-else>
        <h1>Uh oh</h1>
        <p>An error occurred</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default', // you can set a custom layout for the error page
    computed: {
      currentURL: function() {
        return this.$route.fullPath
      }
    }
  }
</script>

<style scoped lang="postcss">
  h1 {
    font-size: 8em;
    color: var(--color-primary);
    font-weight: bold;
  }
  h2 {
    font-weight: 400;
    text-transform: none;
  }
</style>