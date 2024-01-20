<template>
  <div class="form-x">
    <input v-model="form.email" />
    <input v-model="form.password" />
    <button @click="submit">Submit</button>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
const form = ref({ email: "", password: "" });
const submit = () => {
  axios.post("/api/login", form.value);
};
</script>
```
