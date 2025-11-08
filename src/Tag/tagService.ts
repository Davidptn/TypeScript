import { TagServiceContract, Tag } from "./tagTypes";
import TagRepository from "./tagRepository";

const TagService: TagServiceContract = {
    async getAll(skip?: number, take?: number): Promise<Tag[]> {
        return await TagRepository.getAll(skip, take);
    },

    async getById(id: number): Promise<Tag | null> {
        return await TagRepository.getById(id);
    },
};

export default TagService;