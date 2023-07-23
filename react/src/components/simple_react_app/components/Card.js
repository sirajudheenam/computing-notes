import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteCard } from '../actions/cardActions';
import { fetchUsers } from '../actions/userActions';

class Card extends Component {
  // state = { user: '' }
  componentDidMount() {
    /*
    let user = this.props.match.params.user;
    console.log(user);
    this.setState({user: user});
    // ES2015
    this.setState({user});
    */
    this.props.fetchUsers()

  }

  onButtonClick = () => {
    let id = this.props.card.id;
    this.props.deleteCard(id);
    this.props.history.push('/contact')
  }
  render() {
    // const { user } = this.state;
    // console.log(this.props);
    // console.log(this.props.users);
    const { card } = this.props;
    console.log(this.props);
    return(
          <div className="ui raised very padded text container segment"
            style={{ marginTop: '80px' }}
            key={card.id}>
            <h3 className="ui header">{ card.title }</h3>
            <h4 className="ui header">{ card.location }</h4>
            {/* <p> { card.body } </p> */}
            <Link to='/contact' className='ui primary right floated button' >
              Back
            </Link>
            <button className='ui primary right floated button' onClick={this.onButtonClick} >
              Delete
            </button>

          </div>
    ) // return
  } //render
}; // class Card

/* map store state to props */
const mapStateToProps = (state, ownProps) => {
  /* extract user from ownProps of Card */
  let title = ownProps.match.params.user;
  return {
    /* find that particular card from the state of redux */
    /* assign that to Card props (props.card) */
    card: state.cards.find(card => card.title === title),
    users: state.users
    /* Single liner
      card => card.title === title
      equivalent to
      (card) => {
        return card.title === title
      }
    */
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

    /* Adding deleteCard method to props with id as an argument */
    // deleteCard: (id) => { dispatch({ type: 'DELETE_CARD', id })}
    /* Move everything everything to actions/cardActions.js and import deleteCard */
    deleteCard: (id) => { dispatch( deleteCard(id) )},
    /* equivalent to
      props.deleteCard: deleteCard = (id) => { dispatch({ type: 'DELETE_CARD', id }) }
      in ES6 : { id: id } can be written as just { id }
      dispatch: (id) => { dispatch({ type: 'DELETE_CARD', id: id })}
    */
    fetchUsers: () =>  { dispatch( fetchUsers() ) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
