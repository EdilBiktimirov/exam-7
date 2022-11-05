import React, {PropsWithChildren} from 'react';
import {Items} from "../../types";
import FoodItem from "../FoodItem/FoodItem";
import TotalPrice from "../TotalPrice/TotalPrice";
import './Order.css';

interface OrderProps extends PropsWithChildren {
items: Items[];
onBtnClick: (name: string) => void;
getPrice: number;
}

const Order: React.FC<OrderProps> = (props) => {

  return (
      <div className="Order">
        <h3>Order details:</h3>
        {props.items.map((item, index) => {

            if (item.count !== 0) {
              return (
                <FoodItem
                  name={item.name}
                  count={item.count}
                  price={item.price}
                  key={item.name + item.price + item.count + index}
                  onBtnClick={() => props.onBtnClick(item.name)}/>
              );
            }
            else {
              return null
            }
          })}
        <hr/>

        <TotalPrice price={props.getPrice}/>
      </div>
  );
};

export default Order;