<script setup lang="ts">
import BaseButton from '@/components/general/BaseButton';
import { useGameStore } from '@/stores/games';
import type { GameItemProps } from './types';

const gameStore = useGameStore();
const { getGameLink } = gameStore;

const props = defineProps<GameItemProps>();

const clickHandler = async () => {
  const gameLink = await getGameLink(props.id);
  if (gameLink) window.open(gameLink, '_blank');
};
</script>

<template>
  <div class="game-item-component">
    <div class="game-about">
      <div class="image-wrapper">
        <img class="image" :src="props.image" alt="game image">
      </div>
      <p class="title">
        {{ props.title }}
      </p>
    </div>
    <BaseButton class="play-demo" @click="clickHandler">
      Play demo
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.game-item-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 15px;
  border: 2px solid $green-1;
  border-radius: 8px;
}

.game-about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  max-width: 200px;
  min-height: 200px;
  max-height: 200px;

  .image {
    width: 100%;
    height: 100%;
  }
}

.title {
  margin-top: 20px;
  font-size: 24px;
  line-height: 28px;
}

.play-demo {
  align-self: flex-end;
  width: 100%;
  height: 40px;
  margin-top: 20px;
}
</style>
