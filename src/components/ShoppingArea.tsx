import React from "react";
import ShoppingAreaNavBar from "./NavBars/BottomNavBar";
import Banner from "./Banner";
import SearchBar from "./searchBar/SearchBar";
import CategoryList from "./category/CategoryList";
import ProductsList from "./ProductArea/ProductsList";

const ShoppingArea: React.FC = () => {
  return (
    <div className='shopping-area'>
      <ShoppingAreaNavBar/>
      <Banner/>
      <SearchBar/>
      <CategoryList/>
      <ProductsList/>
    </div>
  );
}

export default ShoppingArea;