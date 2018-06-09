import React, {Fragment} from 'react';
import { PostItem } from './PostItem';

const PostList = () => {
    return (
        <Fragment>
        <h2 className="center-align">Posts</h2>
        <PostItem />
        </Fragment>
    );
};

export { PostList };