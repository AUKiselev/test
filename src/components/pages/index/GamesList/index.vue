<script setup lang="ts">
import GameItem from './GameItem/index.vue';
import type { GamesListProps } from './types';

const props = defineProps<GamesListProps>();
</script>

<template>
  <div class="games-list-component">
    <GameItem
      v-for="(item, index) of props.gamesList"
      :key="`game-item-${index}`"
      v-bind="item"
    />
  </div>
</template>

<style scoped lang="scss">
.games-list-component {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  overflow-y: auto;
}
</style>
