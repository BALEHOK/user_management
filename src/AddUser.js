import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import userRepository from './userRepository';

import { Link } from 'react-router-dom';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.onFirstNameChanged = this.onFirstNameChanged.bind(this);
    this.onEmailChanged = this.onEmailChanged.bind(this);
    this.addUser = this.addUser.bind(this);

    this.state = {
      firstName: '',
      email: ''
    };
  }

  onFirstNameChanged(event) {
    const fisrtName = event.target.value;
    this.setState({
      firstName: fisrtName
    });
  }

  onEmailChanged(event) {
    const email = event.target.value;
    this.setState({
      email: email
    });
  }

  addUser(event) {
    event.preventDefault();

    const { firstName, email } = this.state;
    if (firstName === '' && email === '') {
      console.log('user with empty name will not be added');
    } else {
      userRepository.addUser({
        id: (new Date()).getTime(),
        first_name: firstName,
        email: email
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
            <input type="text" placeholder="enter user's email" onChange={this.onEmailChanged}></input>
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
