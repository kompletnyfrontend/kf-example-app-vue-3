<template>
  <div>
    <v-loader v-if="loading" />
    <v-error v-if="error" :error="error" />
    <ui v-if="!loading && !error" v-bind="uiProps" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { UiPost } from "./props";
import PostService from "@/data/services/Post.service";

type ViewDataError = { message: string };

const loading = ref(false);
const error = ref<ViewDataError | null>(null);
const uiProps = ref<UiPost | null>(null);

function loadData() {
  loading.value = true;
  PostService.getPost(1)
    .then((data) => {
      uiProps.value = data;
    })
    .catch((err) => {
      error.value = err;
    })
    .finally(() => {
      loading.value = false;
    });
}

onMounted(() => {
  loadData();
});
</script>
