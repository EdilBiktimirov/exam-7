import React, {useState} from 'react';
import {Menu} from "./types";
import AddItems from "./components/AddItems/AddItems";
import Order from "./components/Order/Order";
import burgerImg from "./assets/burger.png";
import cocaColaImg from "./assets/cocaCola.png";
import friesImg from "./assets/fries.png";
import sandwichImg from "./assets/sandwitch.png";
import cheeseburgerImg from "./assets/cheeseburger.png";
import coffeeImg from "./assets/coffee.png";
import './App.css';

const MENU: Menu[] = [
  {name: 'Burger', price: 110, img: burgerImg, id: 0},
  {name: 'Coca-cola', price: 50,img: cocaColaImg, id: 1},
  {name: 'Fries', price: 60,img: friesImg, id: 2},
  {name: 'Sandwich', price: 100,img: sandwichImg, id: 3},
  {name: 'Cheeseburger', price: 120,img: cheeseburgerImg, id: 4},
  {name: 'Coffee', price: 40, img: coffeeImg,id: 5},
];

function App() {

  const [order, setOrder] = useState([
    {name: 'Burger', count: 0, price: 0},
    {name: 'Coca-cola', count: 0, price: 0},
    {name: 'Fries', count: 0, price: 0},
    {name: 'Sandwich', count: 0, price: 0},
    {name: 'Cheeseburger', count: 0, price: 0},
    {name: 'Coffee', count: 0, price: 0},
  ]);

  const changeOrder = (name: string, id: number) => {
    setOrder(prev => prev.map(elem => {
      return elem.name === name ? {
        ...elem,
        count: elem.count + 1,
        price: elem.price + MENU[id].price
      } : elem
    }))
  };

  const deleteOrderItem = (name: string) => {
    setOrder(prev => prev.map(elem => {
      return elem.name === name ? {
        ...elem,
        count: 0,
        price: 0
      } : elem
    }))
  };

  const getTotalPrice = () => {
    let total = 0;
    order.forEach(item => {
      total += item.price;
    })

    return total;
  };

  return (
    <div className="App">
      <Order items={order} onBtnClick={deleteOrderItem} getPrice={getTotalPrice()}/>
      <AddItems menu={MENU} onFoodClick={changeOrder}/>
    </div>
  );
}

export default App;
