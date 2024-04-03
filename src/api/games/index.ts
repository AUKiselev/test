import axios from '..';
import type { GetGamesListResponse, GetGameLinkResponse } from './types';

const getGamesList = async (page: number) => {
  const params = {
    page,
    'per-page': 20,
    clientId: 'default',
  };

  return axios.get<GetGamesListResponse>('/api/web/casino/game-list', { params });
};

const getGameLink = async (gameId: string) => {
  const body = {
    gameId,
    clientId: 'default',
  };

  return axios.post<GetGameLinkResponse>(`/api/web/v2/casino/games/${gameId}/session-demo`, body);
};

export {
  getGamesList,
  getGameLink,
};
