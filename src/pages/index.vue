<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout';
import {
  computed, onMounted, ref, watchEffect,
} from 'vue';
import { useGameStore } from '@/stores/games';
import { useRoute, useRouter } from 'vue-router';
import GamesList from '@/components/pages/index/GamesList';
import BasePagination from '@/components/general/BasePagination';
import BaseLoader from '@/components/general/BaseLoader';
import { storeToRefs } from 'pinia';

const router = useRouter();
const route = useRoute();

const gameStore = useGameStore();
const { getGamesList } = gameStore;
const { formattedGamesList, pagination } = storeToRefs(gameStore);

const hasPagination = computed(() => Object.keys(pagination).length);
const showLoader = ref(false);

const changePageHandler = (newPage: number) => {
  router.push({
    name: 'index',
    query: {
      page: newPage,
    },
  });
};

watchEffect(async () => {
  if (route.query.page) {
    showLoader.value = true;
    await getGamesList(+route.query.page);
    showLoader.value = false;
  }
});

const loaderProps = {
  loaderWidth: '100px',
  loaderHeight: '100px',
};

onMounted(async () => {
  showLoader.value = true;

  const { page } = route.query;
  if (page) {
    if (!Number.isNaN(page)) {
      await getGamesList(+page);
    } else {
      router.push({
        name: 'index',
        query: {},
      });
    }
  } else {
    await getGamesList(1);
  }

  showLoader.value = false;
});
</script>

<template>
  <DefaultLayout>
    <div class="index-page">
      <BaseLoader
        v-if="showLoader"
        v-bind="loaderProps"
      />
      <template v-else>
        <GamesList :games-list="formattedGamesList" />
        <BasePagination
          v-if="hasPagination"
          class="pagination"
          :items-per-page="+pagination['per-page']"
          :total-items="+pagination['total-count']"
          :first-page="+pagination['current-page']"
          @page-change="changePageHandler"
        />
      </template>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
.index-page {
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  border: 2px solid $green-1;
  border-radius: 8px;
}
.pagination {
  margin-top: 40px;
}
</style>
