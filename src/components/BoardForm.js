import React from 'react'

const BoardForm = (props) => {
  return (
    <form onSubmit={props.createBoard.bind(this)}>
      <input type="text" ref={ el => this.inputEl = el }/>
      <input type="submit"/>
    </form>
  )
}

export default BoardForm;
