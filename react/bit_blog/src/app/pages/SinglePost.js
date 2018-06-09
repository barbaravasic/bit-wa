import React, { Component } from 'react';
import { AboutSinglePost } from '../components/singlePost/AboutSinglePost';
import { postService } from '../../services/postsServices';
import { postsEndpoint } from '../../shared/constants';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
        }
    }

    componentWillReceiveProps(nextProps) {
        let newPostId = nextProps.match.params.postId;
        const singlePostEndpoint = `${postsEndpoint}/${newPostId}`
        postService.fetchSinglePost(singlePostEndpoint)
            .then(post => {
                this.setState({
                    post:post
                })
            })
    }

    componentDidMount() {
        let postId = this.props.match.params.postId;
        this.setState({
            postId: postId,

        })
        const singlePostEndpoint = `${postsEndpoint}/${postId}`
        postService.fetchSinglePost(singlePostEndpoint)
            .then(post => {
                this.setState({
                    post
                })
            })

    }

    render() {
        return (
            <AboutSinglePost post={this.state.post} />
        )
    }
}
export {SinglePost};