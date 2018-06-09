import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card #f9fbe7 lime lighten-4">
                        <div className="card-content">
                            <span className="card-title "><Link to='/post/1' className="grey-text text-darken-3">Card Title</Link></span>
                            <p className="grey-text text-darken-3">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PostItem };