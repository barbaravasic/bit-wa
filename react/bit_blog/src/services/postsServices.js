import Post from "../models/Post";

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
            .then(response => response.json())
            .then(data => {
                let { title, body, id } = data;
                title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
                body = `${body.charAt(0).toUpperCase()}${body.slice(1)}`
                return new Post(title, body, id)
            })
    }

    adaptData(postData) {
        const myPostData = postData.map(post => {
            let { title, body, id } = post;
            title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
            body = `${body.charAt(0).toUpperCase()}${body.slice(1)}`
            return new Post(title, body, id)
        })
        this.saveData("posts", myPostData);
        return myPostData;
    }
}

export const postService = new PostServices();