<template>
  <div class="post-section">
    <div class="post-section__header">
      <h2 class="post-section__title">{{ title }}</h2>
      <div class="post-section__actions">
        <router-link :to="link" class="post-section__link">See all</router-link>
      </div>
    </div>
    <div class="post-section__content">
      <PostList :posts="posts" />
    </div>
  </div>
</template>
