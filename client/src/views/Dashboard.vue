<template>
  <div>
    <NavBar />
    <div class="home">
      <EventsTable />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import EventsTable from '@/components/events-table/EventsTable.vue';

export default Vue.extend({
  name: 'Dashboard',
  components: {
    NavBar,
    EventsTable,
  },
});
</script>
