<template>
  <tr>
    <td>{{ event.title }}</td>
    <td>{{ event.date }}</td>
    <td class="text-right">
      <router-link class="button mr-2" tag="button" :to="editPath">Edit</router-link>
      <button @click.prevent="deleteEvent" class="button">Delete</button>
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
