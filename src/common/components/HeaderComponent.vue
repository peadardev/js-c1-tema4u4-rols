<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="navbar navbar-expand-lg bg-light border-bottom">
    <div class="container">
      <RouterLink to="/" class="navbar-brand d-flex align-items-center">
        <img src="@/assets/logo.svg" alt="Vue logo" height="32" class="me-2" />
        <span class="fw-semibold">Vue Router App</span>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.nav-link.active {
  font-weight: 600;
}
</style>
