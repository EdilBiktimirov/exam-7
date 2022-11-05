import React, {PropsWithChildren} from 'react';

interface FoodBtnProps extends PropsWithChildren {
  name: string;
  price: number;
}

const FoodBtn: React.FC<FoodBtnProps> = (props) => {


  return (
    <div>
      <button type={"button"}>{props.name} Price: {props.price} KGS</button>
    </div>
  );
};

export default FoodBtn;