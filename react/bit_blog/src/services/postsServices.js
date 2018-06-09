import  Post from "../models/Post";

class PostServices {

    saveData = (data, key) => {
        localStorage.setItem(key, data);
    }

    getData = (key) => {
        return localStorage.getItem(key);
    }

    fetchPosts(postsEndpoint) {
        return fetch(postsEndpoint)
            .then(response => response.json())
    }
    
    fetchSinglePost(singlePostEndpoint) {
        return fetch(singlePostEndpoint)
        .then(respose => response.json())
        .then(response => {
            return new Post(response.title, response.body,response.id)
        })
    }

    adaptData(postData) {
        const myPostData = postData.map(post => {
            const {title, body, id} = post;
            return new Post (title, body, id)
        })
        this.saveData("posts", myPostData);
        
        return myPostData;
    }
}

export const postService = new PostServices();