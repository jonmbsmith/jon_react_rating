import React, { Component } from 'react'
// import axios from 'axios'
import fetch from 'isomorphic-fetch'

// get posts from online api
// it's return a json file
class Titles extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    }
  }

  componentDidMount () {
    if (!this.state.isLoaded) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(
        // handle the result
          (result) => {
            this.setState({
              isLoaded: true,
              posts: result
            })
          },
          // Handle error
          (error) => {
            this.setState({
              isLoaded: true,
              error
            })
          }
        )
    }
  }

  render () {
    const { error, isLoaded, posts } = this.state
    if (error) {
      return <div>Error in loading</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      return (
        <div>
          <ol>
            {
              posts.map(post => (
                <li key={post.userId}>{post.title}</li>
              ))
            }
          </ol>
        </div>
      )
    }
  }
}

export default Titles
