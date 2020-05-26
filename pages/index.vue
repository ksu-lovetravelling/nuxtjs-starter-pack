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
    </div>
  </section>
</template>

<script>
import AppButton from '~/components/global/AppButton';

export default {
  components: {
    AppButton,
  },
};
</script>
