import React, {PropsWithChildren} from 'react';
import './FoodBtn.css'

interface FoodBtnProps extends PropsWithChildren {
  name: string;
  price: number;
  onBtnClick: React.MouseEventHandler;
}

const FoodBtn: React.FC<FoodBtnProps> = (props) => {

  return (
    <div className="FoodBtnDiv">
      <button className="FoodBtn" type={"button"} onClick={props.onBtnClick}>
        <span>{props.name}</span>
        <span>{props.price} KGS</span>
      </button>
    </div>
  );
};

export default FoodBtn;