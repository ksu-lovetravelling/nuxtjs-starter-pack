<template>
  <button
    class="app-button"
    :style="buttonStyle"
  >
    <slot />
    <i
      v-if="icon !== ''"
      class="fa"
      :class="icon"
      aria-hidden="true"
    />
  </button>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: '#f23276',
    },
    bgColorHover: {
      type: String,
      default: '#195cc5',
    },
    color: {
      type: String,
      default: '#ffffff',
    },
    colorHover: {
      type: String,
      default: '#ffffff',
    },
    iconColorHover: {
      type: String,
      default: '#ffffff',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    buttonStyle() {
      return {
        '--bg-color': this.bgColor,
        '--bg-color-hover': this.bgColorHover,
        '--color': this.color,
        '--color-hover': this.colorHover,
        '--icon-color-hover': this.iconColorHover,
      };
    },
  },
};
</script>

<style lang="scss">
  .app-button {
    color: var(--color);
    background-color: var(--bg-color);
    min-width: 140px;
    padding: 14px 28px;
    line-height: 36px;
    text-align: center;
    transition: all .3s;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .3px;
    border-radius: 50px;
    box-shadow: 0 5px rgba(0, 0, 0, .15);
    margin-right: 10px;
    margin-bottom: 40px;

    &:hover {
      background-color: var(--bg-color-hover);
      color: var(--color-hover);
      .fa {
        color: var(--icon-color-hover);
      }
    }
  }
</style>
