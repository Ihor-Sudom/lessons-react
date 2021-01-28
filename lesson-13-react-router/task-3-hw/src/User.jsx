import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    }
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.user_id);
  }

  fetchUser = user_id => {
    fetch(`https://api.github.com/users/${user_id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        user: data,
      });
    });
  }

  render() {
    const { avatar_url, name, location } = this.state.user;

    return (
      <div className="user">
        <img 
          alt="User Avatar" 
          src={avatar_url}
          className="user__avatar" 
        />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
};

export default User;
