<script setup lang="ts">
import { computed } from 'vue';
import type { BalanceBlockProps } from './types';

const props = defineProps<BalanceBlockProps>();

const balanceFormatted = computed(() => ({
  Available: props.available,
  'In Play': props['in-play'],
  Bonus: props.bonus,
}));
</script>

<template>
  <div class="balance-block-component">
    <p class="currency">
      {{ props.currency }}
    </p>
    <div class="balance-list">
      <div
        v-for="(value, key) of balanceFormatted"
        :key="`balance-${key}`"
        class="balance"
      >
        <span class="balance-type">
          {{ key }}
        </span>
        <span class="balance-value">
          {{ value }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.balance-block-component {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.currency {
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
}

.balance-list {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.balance {
  display: flex;
  justify-content: space-between;

  &-type {
    font-size: 20px;
    line-height: 24px;
  }

  &-value {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
