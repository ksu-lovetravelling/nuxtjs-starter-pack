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
    </div>
  </section>
</template>

<script>
import AppButton from '~/components/global/AppButton';
import homepageQuery from "@/apollo/queries/home-page/homepage.gql";

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      homePage: {

      }
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
