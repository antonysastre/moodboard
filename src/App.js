import React, { Component } from 'react'
import backend from './backend.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: []}
  }

  componentWillMount() {
    let messagesRef = backend.database()
      .ref('messages')
      .orderByKey()
      .limitToLast(100)

    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key }
      this.setState({ messages: [message].concat(this.state.messages) })
    })
  }

  // private

  addMessage(e) {
    e.preventDefault()
    backend.database().ref('messages').push( this.inputEl.value )
    this.inputEl.value = ''
  }

  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <ul>
          {
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
      </form>
    )
  }
}

export default App;
