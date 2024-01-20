<template>
  <!-- userpanel -->
  <div class="user">
    <div class="user__avatar">
      <img src="https://picsum.photos/200" alt="avatar" />
    </div>
    <div class="user__info">
      <div class="user__name">{{ userData.login }}</div>
      <div class="user__email">{{ userData.email }}</div>
      <div class="user__createdAt"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserData } from "./../../store/user.module";
const { userData } = useUserData();
</script>
