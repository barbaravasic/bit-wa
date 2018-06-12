import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
    const { title, body, postId } = props.post;  
    return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card #d7ccc8 brown lighten-5">
                            <div className="card-content">
                                <span className="card-title "><Link to={`/posts/${postId}`} className="grey-text text-darken-3">{title}</Link></span>
                                <p className="grey-text text-darken-2">{body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
    );
};

export { PostItem };