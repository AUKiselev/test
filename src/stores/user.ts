import { defineStore } from 'pinia';
import type { AuthUserRequest, AuthUserResponse, RefreshTokenResponse } from '@/api/auth/types';
import type { BalanceInfo } from '@/api/user/types';
import {
  authUser as authUserAPI,
  refreshTokens as refreshTokensAPI,
} from '@/api/auth';
import { getUserBalance } from '@/api/user';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    accessToken: '',
    userBalance: [] as BalanceInfo[],
  }),

  actions: {
    async authUser(data: AuthUserRequest): Promise<AuthUserResponse | null> {
      try {
        const { data: response } = await authUserAPI(data);
        if (response?.data?.length) {
          const { attributes: { token, 'refresh-token': refreshToken } } = response.data[0];

          this.accessToken = token || '';
          window.localStorage.setItem('refreshToken', refreshToken);
        }

        return response || null;
      } catch (err) {
        // eslint-disable-next-line
        console.error(err);
        return null;
      }
    },

    async refreshTokens(refreshToken: string): Promise<RefreshTokenResponse | null> {
      try {
        const { data: response } = await refreshTokensAPI(refreshToken);

        const { token, 'refresh-token': newRefreshToken } = response;

        if (newRefreshToken) window.localStorage.setItem('refreshToken', response['refresh-token']);
        if (token) this.accessToken = token;

        return response || null;
      } catch (err) {
        // eslint-disable-next-line
        console.error(err);

        this.signOutUser();
        return null;
      }
    },

    subscribeToUpdateTokens() {
      const timer = setInterval(async () => {
        const refrechToken = window.localStorage.getItem('refreshToken');

        if (refrechToken) {
          const result = await this.refreshTokens(refrechToken);

          if (!result) {
            this.signOutUser();
            clearInterval(timer);
          }
        }
      }, 1000 * 800);
    },

    signOutUser() {
      window.localStorage.removeItem('refreshToken');

      const router = useRouter();
      router.push({ name: 'auth' });
    },

    async getUserBalance() {
      try {
        const { data: { data: response } } = await getUserBalance(this.accessToken);

        this.userBalance = response.map((el) => el.attributes);

        return !!response;
      } catch (err) {
        // eslint-disable-next-line
        console.error(err);
        return null;
      }
    },

    subscribeToUpdateBalance() {
      const timer = setInterval(async () => {
        if (!this.accessToken) this.signOutUser();

        const result = await this.getUserBalance();
        if (!result) {
          this.signOutUser();
          clearInterval(timer);
        }
      }, 1000 * 30);
    },
  },
});
