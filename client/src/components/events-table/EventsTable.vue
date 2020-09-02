<template>
  <div class="table-responsive table-striped border rounded">
    <table class="table mb-0">
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
  mounted() {
    this.$store.dispatch('fetchEvents');
  },
  components: {
    EventsTableHead,
    EventsTableBody,
    EventsTableRow,
  },
});
</script>
