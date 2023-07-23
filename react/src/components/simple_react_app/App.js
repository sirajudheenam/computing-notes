import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';
import BlogCommentApp from './components/blog/BlogCommentApp';
import HemisphereApp from './components/hemisphere/HemisphereApp';
import ImageListApp from './components/imageList/ImageListApp';
import ClockApp from './components/clock/ClockApp';

import UserList from './components/UserList'
import User from './components/User'

// Switch is imported wrapped around routes so that we can remove /card/:user
// and just use /:user instead
// eg., originally it was <Route path='/card/:user' component={Card} />
// It just matches first match in the routes then stops rendering.
const App = () => {
	return(
		<Router>
			<div className="App">
				<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
						<Route path='/contact' component={Contact} />
						<Route path='/users' component={UserList} />
						<Route path='/user/:username' component={User} />
						<Route path='/:user' component={Card} />
						<Route path='/blog' component={BlogCommentApp} />
						<Route path='/hemisphere' component={HemisphereApp} />
						<Route path='/imagelist' component={ImageListApp} />
						<Route path='/clock' component={ClockApp} />
					</Switch>
			</div>
		</Router>
		)
};

export default App;


// react-router-dom version 6.0.0 onwards
// import TemplatesApp from './components/ses/TemplatesApp';
// Get only exact path '/' else it will render Home on every page.
// <Route exact path="/" component={Home} />
// <Route path='/templates' element={<TemplatesApp />} />

// <Router>
// 	<div className="App">
// 		<Navbar />
// 			<Route exact path='/' element={<Home />} />
// 			<Route path='/about' element={<About />} />
// 			<Route path='/contact' element={<Contact hello="World"/>} />
// 			<Route path='/:user' element={<Card />} />
// 			<Route path='/card' element={<Card name="Wedding Card" age="20"/>} />
// 			<Route path='/blog' element={<BlogCommentApp />} />
// 			<Route path='/hemisphere' element={<HemisphereApp />} />
// 			<Route path='/imagelist' element={<ImageListApp />} />
// 			<Route path='/imagelist' element={<ClockApp />} />
// 	</div>
// </Router>
