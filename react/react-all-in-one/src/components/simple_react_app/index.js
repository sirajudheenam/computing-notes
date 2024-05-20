import React from 'react';
import ReactDOM from 'react-dom';
// import ClockApp from './components/clock/ClockApp';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from  'react-redux';
/*
Wrap your App with Provider so it can provide the redux Store to our App.
<Provider store={store} > <App /> </Provider>
Passing store as an argument
*/
import userReducer from './reducers/userReducer';
import todoReducer from './reducers/todoReducer';
import thunk from 'redux-thunk';

// const store = createStore(rootReducer);

const rootReducer = combineReducers({
	user: userReducer,
	todo: todoReducer,
})

// const dummyStore = createStore(todoReducer);

const store = createStore(userReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.querySelector('#root')
);
