import React from 'react'
import { UserItem } from './UserItem'

import { getUsers } from '../services/services'

export class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }


    componentDidMount() {
        getUsers().then((response) => {
            this.setState({
                users: response
            })
            console.log(this.state.users)
        })
    }
    render() {
        const userList = this.state.users;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {userList.map((user, index) => {
                            return <UserItem user={user} key={index} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}