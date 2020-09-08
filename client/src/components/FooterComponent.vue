<template>
  <div id="footer" >
    <span>Created by <a href="https://github.com/18argon">Pabolo Pires</a></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FooterComponent',
});
</script>

<style scoped>
#footer {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
