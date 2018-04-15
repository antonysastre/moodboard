import React from 'react'
import PropTypes from 'prop-types'

const BoardPreview = (props) => {

  const onDelete = (e) => {
    e.preventDefault();
    props.deleteBoard(props.id)
  }

  return (
    <div>
      <img className='board--preview' alt="BoardPreview" src={props.src} />
      <br/>
      <a href="#no-action" onClick={onDelete}>X</a>
    </div>
  )
}


BoardPreview.propTypes =  {
  id: PropTypes.string,
  src: PropTypes.string,
  deleteBoard: PropTypes.func,
}

export default BoardPreview;
