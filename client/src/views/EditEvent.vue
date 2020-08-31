<template>
  <div>
    <NavBar />
    <div class="home">
      <EditEventForm />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import EditEventForm from '@/components/edit-event/EditEventForm.vue';

export default Vue.extend({
  name: 'EditEvent',
  components: {
    NavBar,
    EditEventForm,
  },
});
</script>
