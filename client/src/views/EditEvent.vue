<template>
  <BaseLayout>
    <template v-slot:header>
      <NavBar menuItemActive="DASHBOARD" />
    </template>
    <div class="container">
      <EditEventForm />
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import NavBar from '@/components/navbar/NavBar.vue';
import EditEventForm from '@/components/edit-event/EditEventForm.vue';

export default Vue.extend({
  name: 'EditEvent',
  components: {
    BaseLayout,
    NavBar,
    EditEventForm,
  },
});
</script>
