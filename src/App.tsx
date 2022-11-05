import React, {useState} from 'react';
import './App.css';
import {Menu} from "./types";
import FoodBtn from "./components/FoodBtn/FoodBtn";
import FoodItem from "./components/FoodItem/FoodItem";



const MENU: Menu[] = [
  {name: 'Burger', price: 110, id: 0},
  {name: 'Coca-cola', price: 50, id: 1},
  {name: 'Fries', price: 60, id: 2},
  {name: 'Sandwich', price: 100, id: 3},
  {name: 'Cheeseburger', price: 120, id: 4},
  {name: 'Coffee', price: 40, id: 5},
]

function App() {

  const [order, setOrder] = useState([
    {name: 'Burger', count: 0, price: 0},
    {name: 'Coca-cola', count: 0, price: 0},
    {name: 'Fries', count: 0, price: 0},
    {name: 'Sandwich', count: 0, price: 0},
    {name: 'Cheeseburger', count: 0, price: 0},
    {name: 'Coffee', count: 0, price: 0},
  ])


  const changeOrder = (name: string, id: number) => {
    setOrder(prev => prev.map(elem => {
      return elem.name === name ? {
        ...elem,
        count: elem.count + 1,
        price: elem.price + MENU[id].price
      } : elem;
    }))
  };

  const deleteOrderItem = (name: string) => {
    setOrder(prev => prev.filter(item => item.name !== name));
  };







  return (
    <div className="App">

      <div className="Order">
        {order.map((item, index) => {
          return (
            <FoodItem
              name={item.name}
              count={item.count}
              price={item.price}
              key={item.name + item.price + item.count + index}/>
          )
        })}
      </div>


      <div className="AddItems">
        {MENU.map((item, index) => {
          return (
            <FoodBtn
              name={item.name}
              price={item.price}
              onBtnClick={() => changeOrder(MENU[index].name, MENU[index].id)}
              key={item.name + item.price + index}/>
            )
        })}
      </div>


    </div>
  );
}

export default App;
