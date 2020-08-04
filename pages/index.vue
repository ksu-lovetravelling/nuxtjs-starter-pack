<template>
  <section class="container">
    <div>
      <h1
        class="title"
        style="font-weight: normal"
      >
        nuxtjs-starter-pack
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>

      <app-button>My new button</app-button>

      {{ homePage }}

      <div v-html="$md.render(markdownText)" />

      <img :src="$file.getFileUrl(homePage.background.url)">
    </div>
  </section>
</template>

<script>
import homepageQuery from "@/apollo/queries/home-page/homepage.gql";

export default {
  data() {
    return {
      homePage: {

      },
      markdownText: '# Hello world'
    }
  },
  apollo: {
    homePage: {
      prefetch: true,
      query: homepageQuery,
    }
  }
};
</script>

<style lang="scss">
  .container {


    @media screen and (max-width:640px) {
      h2 {

      }
    }
  }
</style>