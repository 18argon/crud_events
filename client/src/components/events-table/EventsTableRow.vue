<template>
  <tr>
    <td class="align-middle">{{ event.title }}</td>
    <td class="align-middle">{{ event.date }}</td>
    <td class="text-right">
      <router-link class="btn btn-primary mr-2" tag="button" :to="editPath">Edit</router-link>
      <button @click.prevent="deleteEvent" class="btn btn-success">Delete</button>
    </td>
  </tr>
</template>

<script lang='ts'>
import Vue from 'vue';
import Event from '@/models/Event';

export default Vue.extend({
  name: 'EventsTableRow',
  props: {
    event: {
      type: Object as () => Event,
      required: true,
    },
  },
  computed: {
    editPath(): string {
      return `/edit-event/${this.event.id}`;
    },
  },
  methods: {
    deleteEvent() {
      this.$store.dispatch('deleteEvent', this.event.id);
    },
  },
});
</script>
