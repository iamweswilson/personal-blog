<template>
  <div class="flex flex-col container mx-auto">
    <div class="flex justify-center">
      <div class="w-full my-8 lg:w-7/12">
        <TheHeader />
        <section class="my-24 text-center">
          <div v-if="error.statusCode === 404">
            <h1>404</h1>
            <p>This is not the page you were looking for...</p>
          </div>
          <div v-else>
            <h1>Uh oh</h1>
            <p>An error occurred</p>
          </div>
        </section>
        <hr>
        <TheFooter />
      </div>
    </div>
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