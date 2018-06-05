import React from 'react';

export const UserItem = (props) => {
    const {name, email, dob, pictureTh} = props.user;
    return (

        <div className="card horizontal">
            <div className="card-image">
                <img src={pictureTh} />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{dob}</p>
                </div>
            </div>
        </div>
    )
}