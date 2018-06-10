import React, { Component } from 'react';
import { AboutSinglePost } from '../components/singlePost/AboutSinglePost';
import { postService } from '../../services/postsServices';
import { postsEndpoint } from '../../shared/constants';
import { authorsServices } from '../../services/authorsServices';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            authors: [],
            postAuthor:{},
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
            })
        }

    getPostAuthor(newPostAuthor) {
        // const singlePost = this.state.post;
        const allAuthors = authorsServices.getAuthors();
        newPostAuthor = allAuthors.find(author => {
            return author.authorId === this.state.postId;
        })
        this.setState({
            postAuthor:newPostAuthor
        })
    }

    getAuthorsPosts(newAuthorsPosts) {
        const allPosts = postService.getPosts();
        newAuthorsPosts = allPosts.filter(post => {
            return post.userId === this.state.postAuthor.authorId;
        })
        this.setState({
            authorsPosts:newAuthorsPosts
        })
    }

    componentWillReceiveProps(nextProps) {
       const {newAuthorsPosts, newPostAuthor} = nextProps;
        this.getPostAuthor(newPostAuthor);
        this.getAuthorsPosts(newAuthorsPosts);
    }

    render() {

        return (
            <AboutSinglePost post={this.state.post} authorsPosts={this.state.authorsPosts} postAuthor={this.state.postAuthor} />
        )
    }
}
export { SinglePost };