import React from 'react';

let DeleteBlogButton = ({ blog, removeBlog }) =>
    <button
        className="big-red"
        onClick={() => removeBlog(blog)}
    >
        Remove Blog
    </button>

export default DeleteBlogButton;