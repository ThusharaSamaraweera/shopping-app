import React from "react";
import ShoppingAreaNavBar from "./NavBars/BottomNavBar";
import Banner from "./Banner";
import SearchBar from "./searchBar/SearchBar";
import CategoryList from "./category/CategoryList";
import ProductsList from "./ProductArea/ProductsList";
import TopNavBar from "./NavBars/TopNavBar";
import MainMiddleNavBar from "./NavBars/MiddleNavBar";

const ShoppingArea: React.FC = () => {
  return (
    <div className='shopping-area'>
      <TopNavBar/>
      <MainMiddleNavBar/>
      <ShoppingAreaNavBar/>
      <Banner/>
      <SearchBar/>
      <CategoryList/>
      <div className='product-area'>
        <ProductsList/>
      </div>
    </div>
  );
}

export default ShoppingArea;