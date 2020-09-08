<template>
  <BaseLayout>
    <template v-slot:header>
      <NavBar menuItemActive="HOME"/>
    </template>
    <div class="container">
      <h1 class="text-center">Events</h1>
      <EventContainer />
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import NavBar from '@/components/navbar/NavBar.vue';
import EventContainer from '@/components/events-container/EventContainer.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    BaseLayout,
    NavBar,
    EventContainer,
  },
});
</script>
