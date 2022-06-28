<template>
  <nav class="level">
    <p
      v-for="link in links"
      :key="link.title"
      class="level-item has-text-centered"
    >
      <a :href="link.link" class="link is-info">
        <img v-if="link.type === 'img'" :src="link.src" :alt="link.title" />
        <span v-else>{{ link.title }}</span>
      </a>
    </p>
  </nav>
</template>
<script setup>
defineProps({ links: Array });
</script>
<style scoped>
img {
  height: 40px;
  width: auto;
}
</style>
