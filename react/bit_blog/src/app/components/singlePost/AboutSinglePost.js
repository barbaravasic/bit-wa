import React from 'react';
import { AuthorsPostItem } from './AuthorsPostItem';

export const AboutSinglePost = (props) => {
    const { title, body } = props.post;
    const { name} = props.author;
    const {authorsPosts} = props

    return (
        <div className="container">
            <div className="card">
                <div className="card-content #dce775 lime lighten-4">
                    <h2>{title}</h2>
                    <h4> {name}</h4>
                    <p>{body}</p>
                </div>
                <div className="card-content #dce775 lime lighten-2 gray-text">
                    {authorsPosts.map((authorsPost, index) => {
                        return <AuthorsPostItem authorsPostTitle={authorsPost.title} key={index} />
                    })}
                 
                </div>
            </div>
        </div>
    )
}