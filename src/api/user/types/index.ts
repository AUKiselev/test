export type BalanceInfo = {
  currency: string;
  available: number;
  bonus: number;
  'in-play': number;
};

export type BalanceData = {
  id: string;
  type: string;
  attributes: BalanceInfo
};

export type GetUserBalanceResponse = {
  data: BalanceData[];
  links: {
    first: { href: string };
    last: { href: string };
    self: { href: string };
  };
  meta: {
    'current-page': number;
    'page-count': number;
    'per-page': number;
    'total-count': number;
  }
};
