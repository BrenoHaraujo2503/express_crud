import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  name: string;
  description: string;

}

export class GetAllCategoryService {
  async execute(): Promise<Category[]> {
    const repo = getRepository(Category);

    const categories = await repo.find();

    return categories;
  }
}