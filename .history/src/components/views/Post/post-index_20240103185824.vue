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
import { getPost } from "@/data/services/Post.service";
import { mapPostToUiPost } from "./mapper";

type ViewDataError = { message: string };

const loading = ref(false);
const error = ref<ViewDataError | null>(null);
const uiProps = ref<UiPost | null>(null);

function loadData() {
  loading.value = true;
  getPost(1) // id posta nalezy pobrać wcześniej, np. z route'a
    .then((post) => {
      /* 👉 in: model.ts:Post out: props.ts:UiPost */
      uiProps.post.value = mapPostToUiPost(post);
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
