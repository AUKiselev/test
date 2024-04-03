<script setup lang="ts">
// @ts-ignore
import { VueAwesomePaginate } from 'vue-awesome-paginate';
import { onMounted, ref, watchEffect } from 'vue';
import type { BasePaginationProps, BasePaginationEmits } from './types';

const props = withDefaults(defineProps<BasePaginationProps>(), {
  itemsPerPage: 20,
});

const emits = defineEmits<BasePaginationEmits>();

const currentPage = ref(1);

watchEffect(() => {
  emits('pageChange', currentPage.value);
});

onMounted(() => {
  if (props.firstPage) currentPage.value = props.firstPage;
});
</script>

<template>
  <div class="base-pagination-component">
    <VueAwesomePaginate
      :items-per-page="props.itemsPerPage"
      :total-items="props.totalItems"
      v-model="currentPage"
      :max-pages-shown="5"
    />
  </div>
</template>

<style scoped lang="scss">
.base-pagination-component {
  width: fit-content;
  margin: 0 auto;
}

.pagination-container {
  column-gap: 10px;
}

:deep(.paginate-buttons) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: $green-1;
  font-weight: 600;
  font-size: 16px;
  background-color: $white;
  border: 2px solid $green-1;
  border-radius: 50%;
  cursor: pointer;
  transition: color .2s, background .2s;

  &:hover {
    color: $white;
    background-color: $green-1;
  }

  &.active-page {
    color: $white;
    background-color: $green-2;
    pointer-events: none;
  }
}
</style>
