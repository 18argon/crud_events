<template>
  <div>
    <NavBar />
    <div class="home">
      <h1 class="text-center">Events</h1>
      <EventContainer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import EventContainer from '@/components/events-container/EventContainer.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    NavBar,
    EventContainer,
  },
});
</script>
