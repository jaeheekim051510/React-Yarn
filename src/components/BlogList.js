import React from 'react';
import SingleBlog from './SingleBlog'


let BlogList = ( props ) => {
    let renderBlogs = () => {
        return (
            props.blogData.map((blog) => {
                return (
                <SingleBlog 
                    id={blog.id}
                    title={blog.title}
                    body={blog.body}
                />
            ) 
        })
    )
    }
    return (
    <div className="container">
        {renderBlogs()}
    </div>
    )
}

export default BlogList;