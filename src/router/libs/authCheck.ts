import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores';

export default async (): Promise<boolean> => {
  const userStore = useUserStore();
  const { refreshTokens, subscribeToUpdateTokens } = userStore;
  const { accessToken } = storeToRefs(userStore);

  if (accessToken.value) {
    subscribeToUpdateTokens();
    return true;
  }

  const refreshTokenValue = window.localStorage.getItem('refreshToken');
  if (refreshTokenValue) {
    const result = await refreshTokens(refreshTokenValue);
    if (result) {
      subscribeToUpdateTokens();
      return true;
    }

    return false;
  }

  return false;
};
