import Post from "../models/Post";
import { storageServices } from "../shared/storageServices";

class PostServices {


    fetchPosts(postsEndpoint) {
        return fetch(postsEndpoint)
            .then(response => response.json())
            .then(myData => {
                const postsList = this.adaptPostData(myData)

                storageServices.saveData('posts', postsList)
                return postsList
            })
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
        let { title, body, id, userId } = post;
        title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
        body = `${body.charAt(0).toUpperCase()}${body.slice(1)}`
        return new Post(title, body, id, userId)
    }

    getPosts() {
        const posts = storageServices.getData("posts");
        const adaptedPosts = this.adaptPostData(posts);

        return adaptedPosts;
    }
}

export const postService = new PostServices();