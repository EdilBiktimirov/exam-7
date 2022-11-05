import React from 'react';

interface TotalPriceProps {
  price: number;
}

const TotalPrice: React.FC<TotalPriceProps> = (props) => {

 let orderStatus;
 if(props.price === 0) {
   orderStatus = 'Order is empty! Please add some items!';
 } else {
   orderStatus = 'Total price: ' + props.price;
 }

  return (
    <div>
      <span>{orderStatus}</span>
    </div>
  );
};

export default TotalPrice;