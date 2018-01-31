import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import UserList from './UserList';
import AddUser from './AddUser';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route path="/" exact component={UserList} />
          <Route path="/add" exact component={AddUser} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
