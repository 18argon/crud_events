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
import eventsService from '@/services/events-service';
import EventCard from './EventCard.vue';

export default Vue.extend({
  name: 'EventContainer',
  computed: {
    ...mapGetters(['events']),
  },
  created() {
    this.$store.dispatch('fetchEvents');
  },
  mounted() {
    eventsService.fetchEvents()
      .then((events) => {
        this.events = events;
      });
  },
  components: {
    EventCard,
  },
});
</script>
