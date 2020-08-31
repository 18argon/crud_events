<template>
  <div>
    <NavBar selected="dashboard" />
    <main class="container">
      <EditEventForm />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';
import EditEventForm from '@/components/edit-event/EditEventForm.vue';

export default Vue.extend({
  name: 'EditEvent',
  components: {
    NavBar,
    EditEventForm,
  },
});
</script>
