<template>
  <BaseLayout>
    <template v-slot:header>
      <NavBar menuItemActive="DASHBOARD" />
    </template>
    <div class="container">
      <div class="text-right">
        <router-link class="btn btn-success mb-2" tag="button" to='/create-event'>New</router-link>
      </div>
      <EventsTable />
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import NavBar from '@/components/navbar/NavBar.vue';
import EventsTable from '@/components/events-table/EventsTable.vue';

export default Vue.extend({
  name: 'Dashboard',
  components: {
    BaseLayout,
    NavBar,
    EventsTable,
  },
});
</script>
