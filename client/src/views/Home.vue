<template>
  <div>
    <NavBar selected="home" />
    <main class="container">
      <h1 class="text-center">Events</h1>
      <EventContainer />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';
import EventContainer from '@/components/events-container/EventContainer.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    NavBar,
    EventContainer,
  },
});
</script>
