<template>
  <div>
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div class="my-8 w-full lg:w-7/12">
          <TheHeader />
          <Nuxt />
          <hr>
          <TheFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-family: Inter, sans-serif;
  font-size: 13px;
  font-weight: 300;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
