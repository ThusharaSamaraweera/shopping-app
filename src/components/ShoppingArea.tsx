import React from "react";
import ShoppingAreaNavBar from "./BottomNavBar";
import Banner from "./Banner";
import SearchBar from "./searchBar/SearchBar";

const ShoppingArea: React.FC = () => {
  return (
    <div className='shopping-area'>
      <ShoppingAreaNavBar/>
      <Banner/>
      <SearchBar/>
    </div>
  );
}

export default ShoppingArea;