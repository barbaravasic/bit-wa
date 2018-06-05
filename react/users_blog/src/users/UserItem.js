import React from 'react';

export const UserItem = ({user}) => {
    const email = user.hideEmail();
    const { name,dob, pictureTh } = user;
    return (

        <div className="card horizontal">
            <div className="card-image">
                <img src={pictureTh} alt={name}/>
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