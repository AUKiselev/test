export type AuthUserRequest = {
  login: string;
  password: string;
};

export type AuthUserResponse = {
  data: [
    {
      id: string;
      type: string;
      attributes: {
        token: string;
        'token-type': string;
        'refresh-token': string;
        'life-time': number;
        'need-tfa': boolean;
      };
    },
  ];
};

export type RefreshTokenResponse = {
  token: string;
  tokenType: string;
  'refresh-token': string;
  'life-time': string;
  'need-tfa': boolean;
};
