import React, {PropsWithChildren} from 'react';

interface DeleteBtnProps extends PropsWithChildren {
  onBtnClick: React.MouseEventHandler;
}

const DeleteBtn: React.FC<DeleteBtnProps> = (props) => {

  return (
    <div>
      <button type={"button"} onClick={props.onBtnClick}>Delete</button>
    </div>
  );
};

export default DeleteBtn;