<script setup lang="ts">
import type { BaseInputProps } from './types';

const props = withDefaults(defineProps<BaseInputProps>(), {
  id: 'base-input',
  type: 'text',
  label: '',
  placeholder: '',
  error: '',
});

const emit = defineEmits<{
  (e: 'focus'): void;
}>();

const model = defineModel({ required: true });

const focusHandler = () => {
  emit('focus');
};
</script>

<template>
  <div :class="['base-input-component', { '_with-error': props.error }]">
    <label :for="props.id" class="label">
      {{ props.label }}
      <input
        :id="props.id"
        :type="props.type"
        class="base-input"
        :placeholder="props.placeholder"
        v-model="model"
        @focus="focusHandler"
      >
    </label>
    <p class="error-text">
      {{ props.error || '' }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.base-input-component {
  margin-bottom: 16px;

  .label {
    display: flex;
    flex-direction: column;
    color: $green-1;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    transition: color .2s;
    row-gap: 10px;
  }

  .base-input {
    width: 100%;
    height: 40px;
    padding: 8px 5px;
    color: $green-2;
    font-size: 20px;
    line-height: 20px;
    border: 2px solid $green-1;
    border-radius: 8px;
    outline: none;
    transition: border .2s;
  }

  .error-text {
    margin-top: 4px;
    color: $red-1;
    font-size: 14px;
    opacity: 0;
    transition: opacity .2s;
  }

  &:focus-within {
    .label {
      color: $green-2;
    }

    .base-input {
      border-color: $green-2;
    }
  }

  &._with-error {
    margin-bottom: 0;

    .label {
      color: $red-1;
    }

    .base-input {
      border-color: $red-1;
    }

    .error-text {
      opacity: 1;
    }
  }
}
</style>
