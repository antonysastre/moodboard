import React from "react";
import PropTypes from "prop-types";

const BoardPreview = props => {
  console.log(props);
  return (
    <div className="board--preview">
      <img alt={props.title} src={process.env.PUBLIC_URL + props.cover} />
    </div>
  );
};

BoardPreview.propTypes = {
  src: PropTypes.string
};

export default BoardPreview;
