import React from "react";
import { Link } from "react-router-dom";
import boards from "../boards";

const Board = props => {
  const boardId = parseInt(props.match.params.boardId, 10);
  const board = boards.find(item => {
    return item.id === boardId;
  });

  const images = board.images.map(item => {
    return (
      <div className="board--image">
        <img
          key={item.src}
          alt={board.title}
          src={process.env.PUBLIC_URL + item.src}
        />
      </div>
    );
  });

  console.log(images);
  return (
    <div>
      <Link to="/">Back</Link>
      <h2>{board.title}</h2>
      <div className="image-list">{images}</div>
    </div>
  );
};

export default Board;
