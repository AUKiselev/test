<script setup lang="ts">
import { computed } from 'vue';
import type { BaseLoaderProps } from './types';

const props = withDefaults(defineProps<BaseLoaderProps>(), {
  loaderWidth: '40px',
  loaderHeight: '40px',
});

const width = computed(() => props.loaderWidth);
const height = computed(() => props.loaderHeight);
</script>

<template>
  <div class="base-loader-component">
    <div class="loader" />
  </div>
</template>

<style scoped lang="scss">
.base-loader-component {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.loader {
  width: v-bind(width);
  height: v-bind(height);
  border-top: 6px solid $green-1;
  border-radius: 50%;
  animation: rotate 1.5s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
