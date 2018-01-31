import React, { Component } from 'react';
import userRepository from './userRepository';

import UserItem from './UserItem';

class UserList extends Component {
  render() {
    const users = userRepository.getUsers();

    return (
      <div>
        <div>search placeholder</div>
        <ul>
          {users.map(u => <li key={u.id}><UserItem user={u} /></li>)}
        </ul>
      </div>
    );
  }
}

export default UserList;
