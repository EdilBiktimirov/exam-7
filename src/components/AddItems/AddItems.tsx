import React from 'react';
import FoodBtn from "../FoodBtn/FoodBtn";
import {Menu} from "../../types";
import './AddItems.css'

interface AddItemsProps extends React.PropsWithChildren {
  menu: Menu[];
  onFoodClick: (name: string, id: number) => void
}

const AddItems: React.FC<AddItemsProps> = (props) => {

  return (
    <div>
      <div className="AddItems">
        {props.menu.map((item, index) => {
          return (
            <FoodBtn
              name={item.name}
              price={item.price}
              onBtnClick={() => props.onFoodClick(props.menu[index].name, props.menu[index].id)}
              key={item.name + item.price + index}/>
          );
        })}
      </div>
    </div>
  );
};

export default AddItems;