import React from 'react';


export const CardItem = ({ user }) => {
    const email = user.hideEmail();
    const dob = user.formatDate();
    const { name, pictureLarge } = user;
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={pictureLarge} alt={name} />
                    <span className="card-title">{name}</span>
                </div>
                <div className="card-content">
                    <p>{email}</p>
                    <p>Birth Date: {dob}</p>
                </div>
            </div>
        </div>
    )

}