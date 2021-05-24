import React from 'react';
import { useBlogs } from './useBlogs';

export function Blog () {
    let blogs = useBlogs();

    return (
        <div>
            {blogs.map((blogContent) => {
                return (
                    <div key={blogContent.id}>
                        {blogContent.title}
                    </div>
                );
            })}
        </div>
    );
}