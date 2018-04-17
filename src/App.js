import React, { Component } from 'react';
import './App.css';
import Greeting from './components/greeting'
import SingleBlog from './components/SingleBlog'
import BlogList from './components/BlogList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloglist: [],
    };
  }

  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(blogs => {
        this.setState({blogs: blogs});
        console.log(this.state.blogs)     
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Greeting person="Jaehee"/>
        </header>
        {
          this.state.blogs 
          ? <BlogList 
            blogData={this.state.blogs}
            />
          :null
        }
        <footer className="App-footer">
          <p>Copyright 2018</p>
        </footer>

      </div>
    );
  }
}

export default App;
