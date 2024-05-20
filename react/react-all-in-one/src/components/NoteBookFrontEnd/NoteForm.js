import React, { Component } from 'react'
import axios from 'axios'

class NoteForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
      name: this.props.note.name,
      description: this.props.note.description
		}
	}

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const note = {name: this.state.name, description: this.state.description }
    axios.put(
      `http://localhost:3000/api/v1/notes/${this.props.note.id}`,
      {note: note}
      )
    .then(response => {
      console.log(response)
      this.props.updateIdea(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="tile">
      	<form onBlur={this.handleBlur} >
					<input className='input' type="text" name="name" placeholder='Enter a Title'
            value={this.state.name} onChange={this.handleInput}
            ref={this.props.nameRef} />
					<textarea className='input' name="description" placeholder='Notes'
            value={this.state.description} onChange={this.handleInput}></textarea>
      	</form>
      </div>
    );
  }
}

export default NoteForm
