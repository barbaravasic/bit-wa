import React from 'react';

export const AuthorsPostItem = (props) => {
    const {authorsPost} = props
    return (
        <div>
            <h5>{authorsPost.title}</h5>
        </div>
    )
}