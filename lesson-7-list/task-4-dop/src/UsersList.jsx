import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      limitElement: 3,
      page: 1,
      startIndex: 0,
      endIndex: 0,
    }
  }

  handleGoNext = () => {
    this.setState({
      page: this.state.page + 1,
      startIndex: this.state.startIndex + this.state.limitElement,
      endIndex: this.state.endIndex 
        ? this.state.endIndex + this.state.limitElement
        : this.state.limitElement * 2,
    })
  }

  handleGoPrevios = () => {
    this.setState({
      page: this.state.page - 1,
      startIndex: this.state.startIndex - this.state.limitElement,
      endIndex: this.state.endIndex - this.state.limitElement,
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
              itemsPerPage={this.state.limitElement} />
            <ul className="users">
              {this.props.users
                .slice(this.state.startIndex, this.state.endIndex || this.state.limitElement)
                .map(user => (<User key={user.id} {...user} />))
              }
            </ul>
          </div>
        );
    }
}

export default UsersList;
