import React, { Component } from 'react'
import axios from 'axios'
import Note from './Note'
import NoteForm from './NoteForm'
import update from 'immutability-helper'
import Notification from './Notification'

class NotesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      editingNoteId: null,
      notification: 'PlaceHolder for notification', //empty before
      transitionIn: true //false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/notes.json')
    .then(response => {
      this.setState({notes: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewNote = () => {
    axios.post('http://localhost:3000/api/v1/notes', {note: {name: '', description: ''}})
    .then(response => {
      const notes = update(this.state.notes, { $splice: [[0, 0, response.data]]})
      this.setState({notes: notes, editingNoteId: response.data.id})
    })
    .catch(error => console.log(error))
  }

  updateNote = (note) => {
    const noteIndex = this.state.notes.findIndex(x => x.id === note.id)
    const notes = update(this.state.notes, {[noteIndex]: { $set: note }})
    this.setState({notes: notes, notification: 'All changes saved', transitionIn: true})
  }

  deleteNote = (id) => {
    axios.delete(`http://localhost:3000/api/v1/notes/${id}`)
    .then(response => {
      const noteIndex = this.state.notes.findIndex(x => x.id === id)
      const notes = update(this.state.notes, { $splice: [[noteIndex, 1]]})
      this.setState({notes: notes})
    })
    .catch(error => console.log(error))
  }

  resetNotification = () => {this.setState({notification: '', transitionIn: false})}

  enableEditing = (id) => {
    this.setState({editingNoteId: id}, () => { this.name.focus() })
  }

  render() {
    return (
      <div>
        <div>
          <button className="newNoteButton" onClick={this.addNewNote} >
            New Note
          </button>
          <Notification in={this.state.transitionIn} notification= {this.state.notification} />
        </div>
        {this.state.notes.map((note) => {
          if(this.state.editingNoteId === note.id) {
            return(<NoteForm note={note} key={note.id} updateNote={this.updateNote}
                    nameRef= {input => this.name = input}
                    resetNotification={this.resetNotification} />)
          } else {
            return (<Note note={note} key={note.id} onClick={this.enableEditing}
                    onDelete={this.deleteNote} />)
          }
        })}
      </div>
    );
  }
}

export default NotesContainer
