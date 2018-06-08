import { postsEndpoint } from "../shared/constants";
import  Post from "../models/Post";

class PostServices {

    fetchPosts() {
        return fetch(postsEndpoint)
            .then(response => response.json())
    }

    adaptData(postData) {
        const myPostData = postData.map(post => {
            const {title, body} = post;
            return new Post (title, body)
        })
        return myPostData;
    }

    loadData(postData) {
        adaptData(postData)
    }
}

export const postService = new PostServices();