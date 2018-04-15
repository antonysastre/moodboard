import React, { Component } from 'react'
import backend from './backend.js'
import BoardPreview from './BoardPreview.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { boards: []}
  }

  componentWillMount() {
    let boardRef = backend.database()
      .ref('boards')
      .orderByKey()
      .limitToLast(100)

    boardRef.on('child_added', snapshot => {
      let board  = { src: snapshot.val(), id: snapshot.key }
      let boards = [board].concat(this.state.boards)
      this.setState({ boards })
    })

    boardRef.on('child_removed', snapshot => {
      let boards = this.state.boards.filter(b => b.id !== snapshot.key)
      this.setState({ boards })
    })
  }

  // private

  deleteBoard(id) {
    backend.database().ref('boards').child(id).remove();
  }

  createBoard(e) {
    e.preventDefault();
    backend.database().ref('boards').push( this.inputEl.value )
    this.inputEl.value = ''
  }

  render() {
    return (
      <form onSubmit={this.createBoard.bind(this)}>
        <div className="board-list">
          {
            this.state.boards.map( board => <BoardPreview
              id={board.id}
              key={board.id}
              src={board.src}
              deleteBoard={this.deleteBoard}
            /> )
          }
        </div>
        <hr/>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
      </form>
    )
  }
}

export default App;
