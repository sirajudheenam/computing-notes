import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUsers, deleteUser } from '../actions/userActions'
// import User from './User';

class UserList extends Component {

  componentDidMount() {
    let username = this.props.username;
    /* Call the methods of userActions
     It is assigned to this Object's props
     So it is easier to call with dispatch.
    */
    this.props.fetchUsers()
    this.props.deleteUser(username)
  }

  onButtonClick = () => {
    let username = this.props.user.username;
    this.props.deleteUser(username);
    this.props.history.push('/users')
  }

  render() {
    const { users } = this.props;
    return(
      users.map(user => {

        return(
          <div className="ui raised very padded text container segment"
            style={{ marginTop: '80px' }}
            key={user.id}>
            <h3 className="ui header">{ user.name }</h3>
            <Link to={`/user/${user.username}`} className="ui header">{user.name}</Link>
            <p> { user.email } </p>
            <button className='ui primary right floated button' onClick={this.onButtonClick} >
              Show
            </button>
          </div>
        )

      })
    )
  }
}

/*
  Get users from redux store state and assign it to this Object's props.users.
*/
const mapStateToProps = (state) => {
    return {
      users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (username) => { dispatch( deleteUser(username) )},
    fetchUsers: () =>  { dispatch( fetchUsers() ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
