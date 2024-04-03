<script setup lang="ts">
import LeftSidebar from '@/components/layouts/DefaultLayout/LeftSidebar/';
</script>

<template>
  <div class="default-layout">
    <aside class="left-sidebar-wrapper">
      <LeftSidebar />
    </aside>
    <div class="page-container">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.default-layout {
  display: flex;
}

.left-sidebar-wrapper {
  min-width: 400px;
  padding: 40px 20px;
  border-right: 3px solid $green-1;
}

.page-container {
  width: 100%;
  padding: 40px;
  overflow-y: auto;
}
</style>
