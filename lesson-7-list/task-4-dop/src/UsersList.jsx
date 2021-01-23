import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      limit: 3,
      page: 1,
      startIndex: 0,
      endIndex: 0,
    }
  }

  handleGoNext = () => {
    this.setState({
      page: this.state.page + 1,
      startIndex: this.state.startIndex + this.state.limit,
      endIndex: this.state.endIndex 
        ? this.state.endIndex + this.state.limit
        : this.state.limit * 2,
    })
  }

  handleGoPrevios = () => {
    this.setState({
      page: this.state.page - 1,
      startIndex: this.state.startIndex - this.state.limit,
      endIndex: this.state.endIndex - this.state.limit,
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
              itemsPerPage={this.state.limit} />
            <ul className="users">
              {this.props.users
                .slice(this.state.startIndex, this.state.endIndex || this.state.limit)
                .map(user => (<User key={user.id} {...user} />))
              }
            </ul>
          </div>
        );
    }
}

export default UsersList;
