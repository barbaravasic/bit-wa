import React from 'react';
import './App.css';

import { getUsers } from '../services/services';

import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { Main } from './partials/Main'

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listView: true,
      users: [],
    };
  }

  loadUsers = () => {
    getUsers()
      .then((users) => {
        this.setState({
          users
        })
      })
  }

  componentDidMount() {
    this.loadUsers();
  }

  stateSetting = (layout) => {
    if (layout === true) {
      this.setState({ listView: false });
      localStorage.setItem("listView", !(this.state.listView))
    } else {
      this.setState({ listView: true });
      localStorage.setItem("listView", !(this.state.listView))
    }
  }


  render() {
    return (
      <React.Fragment>
        <Header title='Bit Users' state={this.state.listView} stateSetting={this.stateSetting} loadUsers={this.loadUsers} />
        <Main state={this.state.listView} users={this.state.users}  />
        <Footer />
      </React.Fragment>

    )
  }

}

