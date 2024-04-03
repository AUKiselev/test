export type BasePaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  firstPage?: number;
};

export type BasePaginationEmits = {
  (e: 'pageChange', value: number): void
};
