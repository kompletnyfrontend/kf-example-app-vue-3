<template>
  <div>
    <v-loader v-if="loading" />
    <v-error v-if="error" />
    <ui v-if="!loading && !error" v-bind="uiProps" />
  </div>
</template>

<script setup lang="ts">
const loading = useRef(false);
</script>
