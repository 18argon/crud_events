<template>
  <div class="wrapper">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer">
        <MyFooter />
      </slot>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyFooter from './FooterComponent.vue';

export default Vue.extend({
  name: 'BaseLayout',
  components: {
    MyFooter,
  },
});
</script>

<style scoped>

.wrapper {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
