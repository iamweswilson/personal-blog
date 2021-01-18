<template>
  <div>
    <section class="mt-4 mb-12 text-center">
      <div v-if="error.statusCode === 404">
        <img src="/img/404.png?nf_resize=fit&w=751&h=563" class="px-8 mb-8 mx-auto" alt="">
        <h3 class="font-bold text-2xl">Well, this is embarrasing...</h3>
        <p>Looks like the page you're looking for isn't here. Could be my fault, could be yours. If you found a broken link somewhere, please 
        <a :href="'mailto:' +  'wes@iamweswilson.com?subject=I found a broken link!&body=Hey Wes,%0D%0A%0D%0AI found a broken link on your site. The page was supposed to be at' + ' ' + 'iamweswilson.com/' + currentURL">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 inline">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          let me know
        </a> so I can fix it!</p>
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
</style>