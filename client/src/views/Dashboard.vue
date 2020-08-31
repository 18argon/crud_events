<template>
  <div>
    <NavBar selected="dashboard" />
    <main class="container">
      <EventsTable />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';
import EventsTable from '@/components/events-table/EventsTable.vue';

export default Vue.extend({
  name: 'Dashboard',
  components: {
    NavBar,
    EventsTable,
  },
});
</script>
