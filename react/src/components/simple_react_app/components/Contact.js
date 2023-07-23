import React from 'react';
import { Link } from 'react-router-dom';
// import User from './User';
/*
  Bring Higher order Component (connect) from react-redux
  so that we can wrap our Component with
  in our case Contact
*/
import { connect } from 'react-redux';
// import Modal from './Modal';

/* react-router-dom 5 major version */
// instead of props, we can add props.cards as { cards }
const Contact = ({ cards }) => {
  // console.log(cards);
  return(
        cards.map(card => {
          return (
                  <div className="ui raised very padded text container segment"
                    style={{ marginTop: '80px' }} key={card.id}>
                    <h2 className="ui header">{card.title}</h2>
                    <h4>{card.location}</h4>
                    <p>{card.body}</p>
                    <Link to={`/${card.title}`} className='ui primary right floated button' >
                      Show
                    </Link>
                  </div>
                )
              })
  )
};

/* Assign props.cards with Redux Store's (state.cards) */
const mapStateToProps = (state) => {
    return {
      cards: state.cards
    }
}
/* Wrapping our component (Contact) with the higher component connect */
export default connect(mapStateToProps)(Contact);
