import React from 'react'
import { UserItem } from './UserItem'
import { getUsers } from '../../services/services';
import { CardItem } from './CardItem';

export class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    loadUsers() {
        getUsers()
            .then((users) => {
                this.setState({
                    users
                })
            })
    }

    renderListItems(users) {
        return (
            <div className="collection">
                {users.map((user, index) => {
                    return <UserItem user={user} key={index} />
                })}
            </div>
        )
    }

    renderCardItems(users) {
        return (
            <div className="collection">
                {users.map((user, index) => {
                    return <CardItem user={user} key={index} />
                })}
            </div>
        )
    }

    componentDidMount() {
        this.loadUsers()
    }

    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <div className="row">
                    {/* {this.renderListItems(users)} */}
                    {this.renderCardItems(users)}
                </div>
            </div>
        )
    }
}