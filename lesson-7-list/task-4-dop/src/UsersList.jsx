import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      page: 1,
      startIndex: 0,
      endIndex: 3,
    }
  }

  handleGoNext = () => {
    this.setState({
      page: this.state.page + 1,
      startIndex: this.state.startIndex + 3,
      endIndex: this.state.endIndex + 3,
    })
  }

  handleGoPrevios = () => {
    this.setState({
      page: this.state.page - 1,
      startIndex: this.state.startIndex - 3,
      endIndex: this.state.endIndex - 3,
    })
  }

    render() {

        return (
          <div>
            <Pagination 
              goPrev={this.handleGoPrevios} 
              goNext={this.handleGoNext}
              currentPage={this.state.page}
              totalItems={this.props.users.length}
              itemsPerPage={3} />
            <ul className="users">
              {this.props.users
                .slice(this.state.startIndex, this.state.endIndex)
                .map(user => (<User key={user.id} {...user} />))
              }
            </ul>
          </div>
        );
    }
}

export default UsersList;
