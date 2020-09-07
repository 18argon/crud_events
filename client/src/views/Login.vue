<template>
  <div>
    <main class="container">
      <LoginForm />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LoginForm from '@/components/login-form/LoginForm.vue';

export default Vue.extend({
  name: 'Login',
  components: {
    LoginForm,
  },
});
</script>
