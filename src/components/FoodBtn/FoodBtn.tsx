import React, {PropsWithChildren} from 'react';

interface FoodBtnProps extends PropsWithChildren {
  name: string;
  price: number;
  onBtnClick: React.MouseEventHandler;
}

const FoodBtn: React.FC<FoodBtnProps> = (props) => {


  return (
    <div>
      <button type={"button"} onClick={props.onBtnClick}>{props.name} Price: {props.price} KGS</button>
    </div>
  );
};

export default FoodBtn;