<template>
  <div class="event-card col-xs-12 col-sm-6 col-lg-4 mb-3">
    <div class="card shadow-sm h-100 p-3 " style="max-width: 500px">
      <h3 class="h3">{{event.title}}</h3>
      <p>{{ formattedDate }}</p>
      <p>
        {{event.description}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Event from '@/models/Event';

export default Vue.extend({
  name: 'EventCard',
  props: {
    event: {
      type: Object as () => Event,
      required: true,
    },
  },
  computed: {
    formattedDate(): string {
      return this.$props.event.date.toString();
    },
  },
});
</script>
