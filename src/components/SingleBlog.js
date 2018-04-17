
import React, {Component} from 'react';

class SingleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {id:props.id, title:props.title, body:props.body}
    }
    render() {
    return (
        <div>
            <h1> {this.state.title} </h1>
            <h3> id: {this.state.id} </h3>
            <p> {this.state.body} </p>
        </div>
    )
}
    
}

export default SingleBlog;