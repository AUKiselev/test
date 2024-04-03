<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useUserStore } from '@/stores/';
import { storeToRefs } from 'pinia';
import BalanceBlock from './BalanceBlock/index.vue';

const userStore = useUserStore();
const { userBalance } = storeToRefs(userStore);
const { getUserBalance, subscribeToUpdateBalance } = userStore;

const hasBalance = computed(() => userBalance.value.length);

onMounted(async () => {
  const result = await getUserBalance();
  if (result) subscribeToUpdateBalance();
});
</script>

<template>
  <section class="total-balance-component">
    <div v-if="hasBalance" class="balance-block-wrapper">
      <BalanceBlock
        class="balance-block"
        :key="`balance-block-${index}`"
        v-for="(item, index) of userBalance"
        v-bind="item"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.total-balance-component {
  display: flex;
  flex-direction: column;
  max-height: 400px;
  padding: 10px;
  border: 2px solid $green-1;
  border-radius: 16px;
  box-shadow: inset 0 0 15px 5px $green-2;
}

.balance-block-wrapper {
  display: flex;
  flex-direction: column;
  padding: 30px;
  overflow: auto;
  border: 2px solid $green-1;
  border-radius: 8px;
  box-shadow: 0 0 15px 5px $green-2;
  row-gap: 20px;
}
</style>
