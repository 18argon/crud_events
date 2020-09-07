<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          :value="email"
          class="form-control"
          name="email"
          type="text"
          @change="updateEmail"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          :value="password"
          class="form-control"
          name="password"
          type="password"
          @change="updatePassword" />
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'LoginForm',
  computed: {
    ...mapGetters(['email', 'password']),
  },
  methods: {
    updateEmail(e: Event) {
      if (e.target === null) return;
      const newEmail = (e.target as HTMLInputElement).value;
      this.$store.dispatch('updateEmail', newEmail);
    },
    updatePassword(e: Event) {
      if (e.target === null) return;
      const newPassword = (e.target as HTMLInputElement).value;
      this.$store.dispatch('updatePassword', newPassword);
    },
    submitForm() {
      this.$store.dispatch('login')
        .then(() => {
          this.$router.push('/dashboard');
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
</script>
