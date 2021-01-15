<template>
  <div>
    <section class="my-24 text-center">
      <div v-if="error.statusCode === 404">
        <h1>404</h1>
        <p>Looks like the url you tried to find isn't actually a url. Could be my fault, could be yours. If it's mine, please <a href="mailto:wes@iamweswilson.com?subject=I found a broken link!">let me know</a> so I can fix it.</p>
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
    layout: 'default' // you can set a custom layout for the error page
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