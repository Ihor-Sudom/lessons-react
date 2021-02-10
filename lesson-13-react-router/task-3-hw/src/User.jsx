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
    this.getUserData(this.props.match.params.user_id);
  }

  componentDidUpdate(prevProps) {
    const curUserId = this.props.match.params.user_id;
    if (prevProps.match.params.user_id != curUserId) {
      this.getUserData(curUserId);
    }
  }

  getUserData = user_id => 
    fetch(`https://api.github.com/users/${user_id}`)
    .then(response => response.json())
    .then(data => {
      const { avatar_url, name, location} = data;
      this.setState({
        avatar: avatar_url,
        name,
        location,
      });
    })


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
