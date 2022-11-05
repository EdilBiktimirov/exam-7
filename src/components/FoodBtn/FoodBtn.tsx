import React from 'react';
import './FoodBtn.css'

interface FoodBtnProps {
  name: string;
  price: number;
  onBtnClick: React.MouseEventHandler;
  img: string;
}

const FoodBtn: React.FC<FoodBtnProps> = (props) => {
  const btnStyle: React.CSSProperties = {
    background: 'url(' + props.img + ') center center no-repeat',
  };

  return (
    <div className="FoodBtnDiv">
      <button className="FoodBtn" type={"button"} style={btnStyle} onClick={props.onBtnClick}>
        <span>{props.name}</span>
        <span>{props.price} KGS</span>
      </button>
    </div>
  );
};

export default FoodBtn;