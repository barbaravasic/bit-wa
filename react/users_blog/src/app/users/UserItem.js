import React from 'react';

export const UserItem = ({ user }) => {
    const email = user.hideEmail();
    const dob = user.formatDate();
    const { name, pictureTh, gender } = user;

    const togglePinkClass = () => {
        if (gender === "female") {
            return "collection-item avatar pink lighten-5"
        } else {
            return "collection-item avatar"
        }
    }
    return (

        <div className={togglePinkClass()}>
            <img src={pictureTh} alt={name} className="circle" />
            <div className="card-stacked">
                <div className="card-content">
                    <p>{name}</p>
                    <p> <i className="tiny material-icons">email</i> {email}</p>
                    <p><i className="tiny material-icons">cake</i> {dob}</p>
                </div>
            </div>
        </div>
    )
}