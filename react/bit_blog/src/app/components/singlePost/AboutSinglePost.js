import React from 'react';

export const AboutSinglePost = (props) => {
    const {title, body, id} = props.post;
    
    return (
        <div className="container">
            <div className="card">
                <div className="card-content #dce775 lime lighten-4">
                    <h2>{title}</h2>
                    <h3>Authors name {id}</h3>
                    <p>{body}</p>
                </div>
                <div className="card-content #dce775 lime lighten-2 gray-text">
                    <div id="test4">Test 1</div>
                    <div id="test5">Test 2</div>
                    <div id="test6">Test 3</div>
                </div>
            </div>
        </div>
    )
}