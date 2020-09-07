<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        name="title"
        :value="editEvent.title"
        @change="updateTitle"
      />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        type="text"
        class="form-control"
        id="description"
        name="description"
        :value="editEvent.description"
        @change="updateDescription"
      />
    </div>
    <div class="form-group">
      <label for="date">Date</label>
      <input
        type="text"
        class="form-control"
        id="date"
        name="date"
        :value="editEvent.date"
        @change="updateDate"
      />
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
</template>

<script lang='ts'>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'CreateEventForm',
  computed: {
    ...mapGetters(['editEvent']),
  },
  methods: {
    submitForm() {
      this.$store.dispatch('createEvent').then(() => {
        this.$router.push('/dashboard');
      });
    },
    updateTitle(e: Event) {
      if (e.target === null) return;
      const newTitle = (e.target as HTMLInputElement).value;
      this.$store.dispatch('updateTitle', newTitle);
    },
    updateDescription(e: Event) {
      if (e.target === null) return;
      const newDescription = (e.target as HTMLInputElement).value;
      this.$store.dispatch('updateDescription', newDescription);
    },
    updateDate(e: Event) {
      if (e.target === null) return;
      const newDate = (e.target as HTMLInputElement).value;
      this.$store.dispatch('updateDate', newDate);
    },
  },
  components: {},
});
</script>
