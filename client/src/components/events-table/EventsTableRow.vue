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
import EventEntry from '@/models/EventEntry';

export default Vue.extend({
  name: 'EventsTableRow',
  props: {
    event: {
      type: Object as () => EventEntry,
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
