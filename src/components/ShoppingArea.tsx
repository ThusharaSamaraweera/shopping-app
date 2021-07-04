import React from "react";
import ShoppingAreaNavBar from "./BottomNavBar";
import Banner from "./Banner";

const ShoppingArea: React.FC = () => {
  return (
    <div className='shopping-area'>
      <ShoppingAreaNavBar/>
      <Banner/>
    </div>
  );
}

export default ShoppingArea;