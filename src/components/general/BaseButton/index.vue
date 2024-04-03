<script setup lang="ts">
import type { BaseButtonProps } from './types';

const props = withDefaults(defineProps<BaseButtonProps>(), {
  type: 'button',
});
const emit = defineEmits<{
  (e: 'click'): void;
}>();

const clickHandler = () => {
  emit('click');
};
</script>

<template>
  <div class="base-button-component">
    <button :type="props.type" class="base-button" @click.prevent="clickHandler">
      <slot />
    </button>
  </div>
</template>

<style scoped lang="scss">
.base-button-component {
  width: 100%;

  .base-button {
    width: 100%;
    height: 40px;
    color: $green-1;
    font-size: 20px;
    line-height: 24px;
    background-color: $white;
    border: 2px solid $green-1;
    border-radius: 8px;
    cursor: pointer;
    transition: background .2s, color .2s, border .2s;

    &:hover {
      color: $white;
      background-color: $green-2;
      border-color: $green-2;
    }
  }
}
</style>
