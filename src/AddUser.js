import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import userRepository from './userRepository';

import { Link } from 'react-router-dom';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.onFirstNameChanged = this.onFirstNameChanged.bind(this);
    this.onLastNameChanged = this.onLastNameChanged.bind(this);
    this.addUser = this.addUser.bind(this);

    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  onFirstNameChanged(event) {
    const fisrtName = event.target.value;
    this.setState({
      firstName: fisrtName
    });
  }

  onLastNameChanged(event) {
    const lastName = event.target.value;
    this.setState({
      lastName: lastName
    });
  }

  addUser(event) {
    event.preventDefault();

    const { firstName, lastName } = this.state;
    if (firstName === '' && lastName === '') {
      console.log('user with empty name will not be added');
    } else {
      userRepository.addUser({
        id: (new Date()).getTime(),
        first_name: firstName,
        last_name: lastName
      })
    }

    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <p>
          <Link to="/">List users</Link>
        </p>
        <form action="#">
          <p>
            <input type="text" placeholder="enter user's first name" onChange={this.onFirstNameChanged}></input>
            <input type="text" placeholder="enter user's last name" onChange={this.onLastNameChanged}></input>
          </p>
          <p>
            <input type="submit" value="Add user" onClick={this.addUser}></input>
          </p>
        </form>
      </div>
    );
  }
}



export default withRouter(AddUser);
