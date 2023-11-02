import React from 'react'
import BlogPage from '../components/BlogPage/BlogPage';

const Blog = () => {
    document.title = "Bài viết";
    return (
        <div>
            <BlogPage />
        </div>
    )
}

export default Blog;
