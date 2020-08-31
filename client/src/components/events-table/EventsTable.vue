<template>
  <div class="table-responsive">
    <table class="table">
      <EventsTableHead />
      <EventsTableBody>
        <EventsTableRow v-for="event in events" :key="event.id" :event="event" />
      </EventsTableBody>
    </table>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import EventsTableHead from './EventsTableHead.vue';
import EventsTableBody from './EventsTableBody.vue';
import EventsTableRow from './EventsTableRow.vue';

export default Vue.extend({
  name: 'EventsTable',
  computed: {
    ...mapGetters(['events']),
  },
  created() {
    this.$store.dispatch('fetchEvents');
  },
  components: {
    EventsTableHead,
    EventsTableBody,
    EventsTableRow,
  },
});
</script>
