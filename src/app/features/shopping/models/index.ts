export type ShoppingListItem = {
  description: string;
  purchased: boolean;
};

export type ShoppingSummaryModel = {
  total: number;
  purchased: number;
  unpurchased: number;
};
