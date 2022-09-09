import React from 'react';
import './BlogPost.css'
import BlogPostData from '../Data/BlogPostData'
import Card from './Card';

const BlogPost = () => {

    const blog = BlogPostData.map((item) =>{
        return(
            <Card 
                id={item.id}
                title={item.title}
                content={item.content}
                author={item.author}
                date={item.date}
            />
        )
    })

    return(
        <div className="blogpost">
            <div className="sub-blogpost">
                {blog}
            </div>
        </div>
    )
}

export default BlogPost;