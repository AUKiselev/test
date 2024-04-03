import { defineStore } from 'pinia';
import type { GameItem, PaginationInfo } from '@/api/games/types';
import type { FormattedGame } from '@/stores/types/games';
import {
  getGamesList as getGamesListAPI,
  getGameLink as getGameLinkAPI,
} from '@/api/games';

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    gamesList: [] as GameItem[],
    pagination: {} as PaginationInfo,
  }),

  actions: {
    async getGamesList(page: number) {
      try {
        const { data: response } = await getGamesListAPI(page);
        if (response) {
          this.gamesList = response.data;
          this.pagination = response.meta;
        }

        return !!response;
      } catch (err) {
        // eslint-disable-next-line
        console.error(err);
        return null;
      }
    },

    async getGameLink(gameId: string) {
      try {
        const { data: { data: response } } = await getGameLinkAPI(gameId);
        if (response) return response[0].attributes['launch-options']['game-url'] || null;

        return null;
      } catch (err) {
        // eslint-disable-next-line
        console.error(err);
        return null;
      }
    },
  },

  getters: {
    formattedGamesList: (state): FormattedGame[] => state.gamesList.map((game) => {
      const { id, attributes: { title, image } } = game;
      return {
        id,
        title,
        image,
      };
    }),
  },
});
