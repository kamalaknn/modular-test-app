import { useState, useEffect } from 'react';
import {container} from "tsyringe";
import { BlogDataService } from "./BlogData";


function resolveBlogDataService () {
    return container.resolve(BlogDataService);
}

export function useBlogs () {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        let service = resolveBlogDataService();
    
        service.getBlogContent()
            .then((fetchedBlogs) => {
                setBlogs(fetchedBlogs);
            });
      }, []);

    return blogs;
}