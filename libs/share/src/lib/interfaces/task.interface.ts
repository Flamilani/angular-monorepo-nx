import { ICategory } from "./category.interface";

export interface iTask {
  id: number;
  name: string;
  categoryId: ICategory;
  completed: boolean;
}
