import React from 'react';
import './DeleteBtn.css';

interface DeleteBtnProps {
  onBtnClick: React.MouseEventHandler;
}

const DeleteBtn: React.FC<DeleteBtnProps> = (props) => {

  return (
    <div>
      <button className="DeleteBtn" type={"button"} onClick={props.onBtnClick}></button>
    </div>
  );
};

export default DeleteBtn;