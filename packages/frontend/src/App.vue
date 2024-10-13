<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import api from "./eden";

const payload = ref({})
const formName = ref("")

api.echo.post(
  {
    teste1: "huehue",
    teste2: 1234123451235235,
  }
).then(result => {
  payload.value = result.data || {}
})

api.user({id: 5}).put({
    teste1: "put",
    teste2: 5
}).then(result => console.log(result))

</script>

<template>
  <div>
    <a href="https://farmfe.org/" target="_blank">
      <img src="./assets/logo.png" class="logo" alt="Farm logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <input type="text" name="name" id="name" v-model="formName">
  <HelloWorld :msg="formName" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #9F1A8Faa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
