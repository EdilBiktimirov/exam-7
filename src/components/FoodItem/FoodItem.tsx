import React from 'react';
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import './FoodItem.css';

interface FoodItemProps extends React.PropsWithChildren {
  name: string;
  count: number;
  price: number;
  onBtnClick: () => void;
}

const FoodItem: React.FC<FoodItemProps> = (props) => {

  return (
    <div className="FoodItem">
      <span className="FoodItemName">{props.name}</span>
      <span className="FoodItemCount">x{props.count}</span>
      <span className="FoodItemPrice">{props.price} KGS</span>
      <DeleteBtn onBtnClick={props.onBtnClick}/>
    </div>
  );
};

export default FoodItem;