import React, { Component } from 'react';
import userRepository from './userRepository';

import { Link } from 'react-router-dom';
import UserItem from './UserItem';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.onFilterChanged = this.onFilterChanged.bind(this);

    this.state = {
      filter: ''
    }
  }

  onFilterChanged(event) {
    this.setState({ filter: event.target.value });
  }

  // get users and apply case insensitive filtering
  getUsers() {
    const filter = this.state.filter.toLowerCase();
    let users = userRepository.getUsers();
    if (filter !== '') {
      users = users.filter(u => u.first_name.toLowerCase().indexOf(filter) !== -1);
    }

    return users;
  }

  render() {
    const users = this.getUsers();

    return (
      <div>
        <p>
          <Link to="/add">Add new user</Link>
        </p>
        <p>
          <input type="text" placeholder="filter by first name" onChange={this.onFilterChanged} />
        </p>
        <ul>
          {users.map(u => <li key={u.id}><UserItem user={u} /></li>)}
        </ul>
      </div>
    );
  }
}

export default UserList;
