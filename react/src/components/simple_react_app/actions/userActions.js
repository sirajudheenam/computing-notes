import axios from 'axios';

export const fetchUsers = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then( ({ data }) => {
        dispatch({ type: 'FETCH_USERS', payload: data})
      })
  }
}

export const deleteUser = (username) => {
  return {
    type: 'DELETE_USER',
    username
  }
}
