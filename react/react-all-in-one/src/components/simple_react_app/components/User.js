import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteUser } from '../actions/userActions';

class User extends Component {

  componentDidMount() {
    let user =  this.props.user;
  }

  onButtonDelete = () => {
    let username = this.props.user.username;
    this.props.deleteUser(username);
    this.props.history.push('/users')
  }
  render() {
    // let username = this.props.match.params.username;
     let user =  this.props.user;
    // console.log(this.props.user);
    return(
        <div className="ui raised very padded text container segment"
          style={{ marginTop: '80px' }}
          key={user.id}>
          <h3 className="ui header">{ user.name }</h3>
          <h4 className="ui header">{ user.username }</h4>
          <p> { user.email } </p>
          <button className='ui primary right floated button' onClick={this.onButtonDelete} >
            Delete
          </button>
        </div>

    )
  }

}

const mapStateToProps = (state, ownProps) => {
  let username = ownProps.match.params.username;
  return {
    users: state.users,
    user: state.users.find(user => user.username === username)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (username) => { dispatch( deleteUser(username) )},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
