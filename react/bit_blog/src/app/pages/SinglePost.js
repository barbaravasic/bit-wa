import React, { Component } from 'react';
import { AboutSinglePost } from '../components/singlePost/AboutSinglePost';
import { postService } from '../../services/postsServices';
import { postsEndpoint, authorsEndpoint } from '../../shared/constants';
import { authorsServices } from '../../services/authorsServices';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            author: {},
            authorsPosts:[]
        }
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
                    post,
                })
                const authorsId = this.state.post.userId;
                const singleAuthorEndpoint = `${authorsEndpoint}/${authorsId}`
                authorsServices.fetchSingleAuthor(singleAuthorEndpoint)
                    .then(author => {
                        this.setState({
                            author
                        })
                        postService.fetchPosts(postsEndpoint)
                            .then(postList => {
                                const authorsPosts = postList.filter(post => {
                                   return post.userId === author.authorId;
                                })
                                this.setState({
                                    authorsPosts
                                })
                            })
                    })
            })
    }

    render() {

        return (
            <AboutSinglePost post={this.state.post} author={this.state.author} authorsPosts={this.state.authorsPosts}/>
        )
    }
}
export { SinglePost };