import Post from "../models/Post";

class PostServices {


    fetchPosts(postsEndpoint) {
        return fetch(postsEndpoint)
            .then(response => response.json())
            .then(myData => this.adaptPostData(myData))
    }

    fetchSinglePost(singlePostEndpoint) {
        return fetch(singlePostEndpoint)
            .then(response => response.json())
            .then(data => this.createPostInstance(data)
            )
    }

    adaptPostData(postData) {
        const myPostData = postData.map(post => {
            return this.createPostInstance(post);
        })
        return myPostData;
    }

    createPostInstance(post) {
        let { title, body, id } = post;
        title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
        body = `${body.charAt(0).toUpperCase()}${body.slice(1)}`
        return new Post(title, body, id)
    }
}

export const postService = new PostServices();