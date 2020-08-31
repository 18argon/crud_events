<template>
  <div>
    <NavBar selected="dashboard" />
    <main class="container">
      <CreateEventForm />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CreateEventForm from '@/components/create-event/CreateEventForm.vue';
import NavBar from '@/components/navbar/NavBar.vue';

export default Vue.extend({
  name: 'CreateEvent',
  components: {
    NavBar,
    CreateEventForm,
  },
});
</script>
