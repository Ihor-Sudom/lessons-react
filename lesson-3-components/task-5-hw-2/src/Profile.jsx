import React from 'react';
import moment from "moment";


const Profile = (props) => {
  const age = moment(props.userData.birthDate).format("D MMM YY");
  return (
    <div className="profile">
      <p className="profile__name">{props.userData.firstName} {props.userData.lastName}</p>
      <p className="profile__birth">Was born {age} in {props.userData.birthPlace}</p>
    </div>
  );
};

export default Profile;