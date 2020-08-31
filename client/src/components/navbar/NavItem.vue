<template>
  <router-link class="nav-item nav-link" :class="{ active: isActive }" :to="path">
    <slot />
    <span v-if="isActive" class="sr-only">(current)</span>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
});
</script>
