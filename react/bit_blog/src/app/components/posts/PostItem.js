import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
    const { title, body, id } = props.post;
    const postPath = `/post/${id}`    
    return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card #f9fbe7 lime lighten-4">
                            <div className="card-content">
                                <span className="card-title "><Link to={postPath} className="grey-text text-darken-3">{title}</Link></span>
                                <p className="grey-text text-darken-3">{body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
    );
};

export { PostItem };