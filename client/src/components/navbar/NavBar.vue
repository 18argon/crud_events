<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2 box-shadow">
      <router-link class="navbar-brand" to="/">Events</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <NavItem path="/" :isActive="selected === 'home'">Home</NavItem>
          <NavItem path="/dashboard" :isActive="selected === 'dashboard'">Dashboard</NavItem>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import NavItem from './NavItem.vue';

export default Vue.extend({
  name: 'NavBar',
  props: {
    selected: {
      type: String,
      validator: (value) => ['home', 'dashboard'].indexOf(value) !== -1,
      required: true,
    },
  },
  components: {
    NavItem,
  },
});
</script>
