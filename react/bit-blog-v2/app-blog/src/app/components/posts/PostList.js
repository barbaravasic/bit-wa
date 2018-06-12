import React, { Fragment } from 'react';
import { PostItem } from './PostItem';

const PostList = (props) => {

    const renderPostList = () => {
        const postList = props.posts;
        return postList.reverse().map((post) => {
                return (
                    <PostItem post={post} key={post.postId} />
                )
            })
    }
    return (
        <Fragment>
            <h2 className="center-align grey-text text-darken-2">Posts</h2>
            {renderPostList()}
        </Fragment>
    );
};

export { PostList };