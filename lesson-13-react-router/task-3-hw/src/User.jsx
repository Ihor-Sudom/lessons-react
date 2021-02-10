import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
      name: null,
      location: null,
    }
  }

  componentDidMount() {
    this.getUserData(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    const curUserId = this.props.match.params.userId;
    if (prevProps.match.params.userId != curUserId) {
      this.getUserData(curUserId);
    }
  }

  getUserData = userId => {
    fetch(`https://api.github.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
      const { avatar_url, name, location} = data;
      this.setState({
        avatar: avatar_url,
        name,
        location,
      });
    })
  }


  render() {
    const { avatar, name, location } = this.state;

    if (!avatar || !name || !location) {
      return null;
    }

    return (
      <div className="user">
        <img 
          alt="User Avatar" 
          src={avatar}
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
