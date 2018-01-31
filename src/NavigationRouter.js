import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import UserList from './UserList';
import AddUser from './AddUser';

export default class NavigationRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/">
          <Route path="/" exact component={UserList} />
          <Route path="/add" exact component={AddUser} />
        </Route>
      </BrowserRouter>
    );
  }
}
