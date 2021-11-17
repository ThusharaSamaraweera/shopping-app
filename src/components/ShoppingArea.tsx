import React from "react";
import ShoppingAreaNavBar from "./NavBars/BottomNavBar";
import Banner from "./Banner";
import SearchBar from "./searchBar/SearchBar";
import CategoryList from "./category/CategoryList";

const ShoppingArea: React.FC = () => {
  return (
    <div className='shopping-area'>
      <ShoppingAreaNavBar/>
      <Banner/>
      <SearchBar/>
      <CategoryList/>
    </div>
  );
}

export default ShoppingArea;