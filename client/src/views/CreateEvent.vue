<template>
  <BaseLayout>
    <template v-slot:header>
      <NavBar menuItemActive="DASHBOARD" />
    </template>
    <div class="container">
      <CreateEventForm />
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import NavBar from '@/components/navbar/NavBar.vue';
import CreateEventForm from '@/components/create-event/CreateEventForm.vue';

export default Vue.extend({
  name: 'CreateEvent',
  components: {
    BaseLayout,
    NavBar,
    CreateEventForm,
  },
});
</script>
