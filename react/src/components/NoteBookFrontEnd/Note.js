import React, { Component } from 'react'

class Note extends Component {
	handleClick = () => { this.props.onClick(this.props.note.id) }

	handleDelete = () => { this.props.onDelete(this.props.note.id) }

	render () {
		return(
		  <div className="tile">
		  	<span className="deleteButton" onClick={this.handleDelete}>x</span>
		    <h4 onClick={this.handleClick}>{this.props.note.name}</h4>
		    <p onClick={this.handleClick}>{this.props.note.description}</p>
		  </div>
		)
	}
}

export default Note
