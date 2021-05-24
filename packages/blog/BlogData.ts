import { singleton } from "tsyringe";
import { APIService, APIServiceInterface } from "../network-api";

interface BlogContent {
    id: string,
    title:  string
}

@singleton()
export class BlogDataService {
    private apiService: APIServiceInterface

    constructor (apiService: APIService) {
        this.apiService = apiService;
    }
    
    async getBlogContent (): Promise<BlogContent[]> {
        let topStories = await this.apiService.fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
        topStories = topStories.slice(0, 10);
        let blogs = await Promise.all(topStories.map((storyId: number) => {
            return this.apiService.fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
        }));

        return blogs.map((blogData: any) => {
            return {
                id: blogData.id,
                title: blogData.title
            };
        });
    }
}