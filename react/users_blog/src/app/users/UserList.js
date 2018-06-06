import React from 'react'
import { UserItem } from './UserItem'

import { CardItem } from './CardItem';

export const UserList = (props) => {

const {users} = props;

    const renderListItems = (users) => {

        return (
            <div className="collection">
                {users.map((user, index) => {
                    return <UserItem user={user} key={index} />
                })}
            </div>
        )
    }

    const renderCardItems = (users) => {

        return (
            <div className="collection">
                {users.map((user, index) => {
                    return <CardItem user={user} key={index} />
                })}
            </div>
        )
    }

    const chooseLayout = (users) => {
        const listView = localStorage.getItem("listView")
        console.log(listView)
        return listView === "true" || listView === null ?
            renderListItems(users)
            : renderCardItems(users)
    }

    return (
        <div className="container" >
            <div className="row">
                {chooseLayout(users)}
            </div>
        </div >
    )
}
