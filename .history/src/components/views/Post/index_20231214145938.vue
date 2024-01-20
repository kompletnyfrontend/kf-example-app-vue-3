<template>
  <div>
    <v-loader v-if="loading" />
    <v-error v-if="error" :error="error" />
    <ui v-if="!loading && !error" v-bind="uiProps" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const loading = ref(false);
const error = ref<Error | null>(null);
</script>
