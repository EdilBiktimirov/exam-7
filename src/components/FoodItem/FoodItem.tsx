import React from 'react';

interface FoodItemProps extends React.PropsWithChildren {
  name: string;
  count: number;
  price: number;
}

const FoodItem: React.FC<FoodItemProps> = (props) => {


  return (
    <div>
      <span>{props.name}</span>
      <span>x {props.count}</span>
      <span>{props.price} KGS</span>
    </div>
  );
};

export default FoodItem;