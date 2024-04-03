export type GameItem = {
  id: string;
  type: string;
  attributes: {
    title: string;
    'provider-game-id': string;
    provider: string;
    categories: string[];
    devices: string[];
    image: string;
    table: string | null;
    'limit-id': string | null;
    'is-mini-game': number;
    'is-new': number;
    'is-single-currency': number;
    'is-favorite': number;
    'has-freespins': number;
    'has-demo': number;
    tags: string[] | null;
    'launch-options': {
      strategy: string
    }
  }
};

export type PaginationInfo = {
  'current-page': number;
  'page-count': number;
  'per-page': number;
  'total-count': number;
};

export type GetGamesListResponse = {
  data: GameItem[];
  links: {
    first: string;
    last: string;
    next: string;
    self: string;
  };
  meta: PaginationInfo;
};

export type GameLink = {
  id: string;
  type: string;
  attributes: {
    'launch-options': {
      'game-url': string;
      strategy: string;
    }
  }
};

export type GetGameLinkResponse = {
  data: GameLink[];
};
