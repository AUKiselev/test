import axios from '..';
import type {
  AuthUserRequest,
  AuthUserResponse,
  RefreshTokenResponse,
} from './types';

const authUser = async (data: AuthUserRequest) => {
  const body = {
    ...data,
    clientId: 'default',
  };

  return axios.post<AuthUserResponse>('/api/web/v2/login', body);
};

const refreshTokens = async (refreshToken: string) => {
  const body = {
    refreshToken,
    clientId: 'default',
  };

  return axios.post<RefreshTokenResponse>('/api/web/auth/token', body);
};

export {
  authUser,
  refreshTokens,
};
