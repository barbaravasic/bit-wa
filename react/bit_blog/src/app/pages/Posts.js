import React, { Component } from 'react';
import { PostList } from '../components/posts/PostList';
import { postService } from '../../services/postsServices';
import { postsEndpoint } from "../../shared/constants";



class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.fetchPosts(postsEndpoint)
            .then(myPosts => {
                this.setState({
                    posts: myPosts
                })
            })

            postService.getPosts()
    }
    render() {
        return (
            <PostList posts={this.state.posts} />
        );
    }
}

export { Posts }