export type ItemId = `${string}-${string}-${string}-${string}-${string}`;

export type TItems = {
  id: ItemId;
  title: string;
};

export type TCreateItemsProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type TItemsProps = {
  items: Array<{
    id: ItemId;
    title: string;
  }>;
  handleDelete: (id: ItemId) => void;
};
