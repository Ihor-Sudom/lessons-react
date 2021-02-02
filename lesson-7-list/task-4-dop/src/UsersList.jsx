import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      currentPage: 1,
      usersPerPage: 3,
    }
  }

  goPrev = () => {
    this.state({
      currentPage: this.state.currentPage - 1
    })
  }

  goNext = () => {
    this.state({
      currentPage: this.state.currentPage + 1
    })
  }

    render() {
      const { users } = this.props;
      const { currentPage, usersPerPage } = this.state;

      const start = (currentPage - 1) * usersPerPage;
      const usersToDiplay = users.slice(start, start + usersPerPage)

        return (
          <div>
            <Pagination 
              goPrev={this.goPrev} 
              goNext={this.goNext}
              currentPage={currentPage}
              totalItems={users.length}
              itemsPerPage={usersPerPage} />
            <ul className="users">
              {usersToDiplay.map(user => (<User key={user.id} {...user} />))}
            </ul>
          </div>
        );
    }
}

export default UsersList;
