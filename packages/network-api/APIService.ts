import { singleton } from 'tsyringe';

export interface APIServiceInterface {
    fetch(url: string): Promise<any> 
}

@singleton()
export class APIService implements APIServiceInterface {
    private cache: Map<string, any>
    constructor () {
        this.cache = new Map();
    }
    
    async fetch (url: string): Promise<any> {
        if (this.cache.has(url)) {
            return this.cache.get(url);
        }
        
        let response = await window.fetch(url);
        let responseJSON = await response.json();
        
        this.cache.set(url, responseJSON);

        return responseJSON;
    }
}