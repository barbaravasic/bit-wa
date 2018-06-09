import  Post from "../models/Post";

class PostServices {

    fetchPosts(postsEndpoint) {
        return fetch(postsEndpoint)
            .then(response => response.json())
    }

    adaptData(postData) {
        const myPostData = postData.map(post => {
            const {title, body, id} = post;
            return new Post (title, body, id)
        })
        return myPostData;
    }
}

export const postService = new PostServices();