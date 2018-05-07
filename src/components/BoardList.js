import React from "react";
import BoardPreview from "./BoardPreview";
import { Link } from "react-router-dom";

const BoardList = props => {
  return (
    <div className="board-list">
      {props.boards.map(board => (
        <Link key={board.id} to={`/view/${board.id}`}>
          <BoardPreview {...board} />
        </Link>
      ))}
    </div>
  );
};

export default BoardList;
