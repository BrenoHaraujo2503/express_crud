import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  id: string;
}

export class DeleteCategoryService {
  async execute({ id }: CategoryRequest) {
    const repo = getRepository(Category);

    if(!await repo.findOne(id)) {
      return Error("Category does not exists")
    }

    await repo.delete(id);
  }
}