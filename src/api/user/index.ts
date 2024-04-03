import axios from '..';
import type { GetUserBalanceResponse } from './types';

const getUserBalance = async (accessToken: string) => {
  const params = {
    auth: accessToken,
    clientId: 'default',
  };

  return axios.get<GetUserBalanceResponse>('/api/web/v2/users/me/balance', { params });
};

export {
  getUserBalance,
};
