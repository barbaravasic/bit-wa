import React from 'react'
import { UserList } from '../users/UserList';

export const Main = (props) => {
    const {listView, users, inputValue} = props
    return (
        <UserList  listView={listView} users={users} inputValue={inputValue}/>
    )
}