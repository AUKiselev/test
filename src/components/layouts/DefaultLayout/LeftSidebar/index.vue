<script setup lang="ts">
import UserInfo from './UserInfo/index.vue';
import TotalBalance from './TotalBalance/index.vue';
</script>

<template>
  <div class="left-sidebar-component">
    <UserInfo />
    <TotalBalance />
  </div>
</template>

<style scoped lang="scss">
.left-sidebar-component {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}
</style>
