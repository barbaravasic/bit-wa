import React from 'react'
import { UserItem } from './UserItem'

import { CardItem } from './CardItem';

export const UserList = (props) => {

    const { users, inputValue, listView } = props;

    const filterUsers = (users, value) => {
        return users.filter((user, index) => user.name.toLowerCase().includes(value));
    }


    const renderListItems = (users) => {
        if (inputValue === "") {
            return (
                <div className="collection">
                    {users.map((user, index) => {
                        return <UserItem user={user} key={index} />
                    })}
                </div>
            )
        } else {
            return (
                <div className="collection">
                    {filterUsers(users, inputValue).map((user, index) => {
                        return <UserItem user={user} key={index} />
                    })}
                </div>
            )
        }
    }

    const renderCardItems = (users) => {
        if (inputValue === "") {
            return (
                <div className="collection">
                    {users.map((user, index) => {
                        return <CardItem user={user} key={index} />
                    })}
                </div>
            )
        } else {
            return (
                <div className="collection">
                    {filterUsers(users, inputValue).map((user, index) => {
                        return <CardItem user={user} key={index} />
                    })}
                </div>
            )
        }
    }

    const chooseLayout = (users) => {
        return !listView ?
            renderCardItems(users)
            : renderListItems(users)
    }

    return (
        <div className="container" >
            <div className="row">
                {chooseLayout(users)}
            </div>
        </div >
    )
}
