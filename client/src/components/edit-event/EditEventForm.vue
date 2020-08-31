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
  name: 'EventForm',
  computed: {
    ...mapGetters(['editEvent']),
  },
  created() {
    this.$store.dispatch('fetchEditEvent', this.$route.params.id);
  },
  methods: {
    submitForm() {
      this.$store.dispatch('saveEvent', this.$route.params.id);
      this.$router.push('/dashboard');
    },
    updateTitle(e: any) {
      this.$store.dispatch('updateTitle', e.target.value);
    },
    updateDescription(e: any) {
      this.$store.dispatch('updateDescription', e.target.value);
    },
    updateDate(e: any) {
      this.$store.dispatch('updateDate', e.target.value);
    },
  },
  components: {},
});
</script>
