<template>
  <div class="container">
    <div class="row row-wrap d-flex align-items-stretch ">
      <EventCard v-for="event in events" :key="event.key" :event="event" />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import EventCard from './EventCard.vue';

export default Vue.extend({
  name: 'EventContainer',
  computed: {
    ...mapGetters(['events']),
  },
  mounted() {
    this.$store.dispatch('fetchEvents');
  },
  components: {
    EventCard,
  },
});
</script>
