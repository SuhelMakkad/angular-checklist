export type CheckList = {
  id: string;
  name: string;
  createdAt: string;
};

export type Todo = {
  id: string;
  checkListId: string;
  title: string;
  completed: boolean;
  createdAt: string;
};
