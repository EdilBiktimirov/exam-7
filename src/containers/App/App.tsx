import React, {useState} from 'react';
import './App.css';
import {Menu} from "../../types";
import FoodBtn from "../../components/FoodBtn";

const MENU: Menu[] = [
  {name: 'Burger', price: 110},
  {name: 'Coca-cola', price: 50},
  {name: 'Fries', price: 60},
  {name: 'Sandwich', price: 100},
  {name: 'Cheeseburger', price: 120},
  {name: 'Coffee', price: 40},
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




  return (
    <div className="App">
      <div className="AddItems">
        {MENU.map((item, index) => {
          return (
            <FoodBtn name={item.name} price={item.price} key={index}/>
            )
        })}
      </div>

    </div>
  );
}

export default App;
