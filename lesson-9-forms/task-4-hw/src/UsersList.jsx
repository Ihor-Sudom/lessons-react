import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    let userList = this.props.users.some(element => element.name.toLowerCase() == this.state.value.toLocaleLowerCase())
      ? this.props.users.filter(user => user.name.toLowerCase() == this.state.value.toLowerCase())
      : this.props.users;

    return (
      <div>
        <Filter
          filterText={this.state.value}
          count={userList.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {userList.map(user => (<User key={user.id} name={user.name} age={user.age} />))}
        </ul>
      </div>
    )
  }
}

export default UsersList;