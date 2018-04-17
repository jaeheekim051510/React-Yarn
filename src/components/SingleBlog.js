
import React from 'react';

let SingleBlog = ({ userId, title, body }) => {
    return (
        <div>
            <h1> {title} </h1>
            <h3> user id: {userId} </h3>
            <p> {body} </p>
        </div>
    )
    
}

export default SingleBlog;