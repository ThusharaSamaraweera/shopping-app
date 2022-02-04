import React, { useState } from "react";
import {Row, Col, Image} from "react-bootstrap";
import { useSelector } from "react-redux";
import allCategoryImage from '../../asserts/images/all-cat.webp';
import { AppState } from "../../state/reducers";
import { ICategory } from "../../types/shoppingAreaTypes";

const Category:React.FC = () => {
  const imgGrocery = 'https://s3.amazonaws.com/cdn1.shub/categories/grocery.png';
  const imgPharmacy = 'https://s3.amazonaws.com/cdn1.shub/categories/health.png';
  const imgFood = 'https://s3.amazonaws.com/cdn1.shub/categories/food.png';
  const imgElectronics = 'https://s3.amazonaws.com/cdn1.shub/categories/electro.png';
  const imgHeight = '100px';

  // const [activeCategory, setActiveCategory] = useState<ICategory>({id: 0, title: 'All'});
  const activeCategory = useSelector( (state: AppState) => state.category.category);

  const handleOnCategoryChange = (category: string) => {
    if(category === 'All'){
      setActiveCategory({id: 0, title: 'All'})
    }else if(category === 'Grocery'){
      setActiveCategory({id: 1, title: 'Grocery'})
    }else if(category === 'Pharmacy'){
      setActiveCategory({id: 2, title: 'Pharmacy'})
    }else if(category === 'Food'){
      setActiveCategory({id: 3, title: 'Food'})
    }else if(category === 'Electronics'){
      setActiveCategory({id: 4, title: 'Electronics'})
    }
  };
  
  return (
    <Row className="category justify-content-around my-2">
      <Col className={`cat-box cat-img text-center ${(activeCategory.title === "All") ? 'active' : ''}`}
            xs={2} lg={2} md={2} sm={2} xl={2} 
            onClick={ () => handleOnCategoryChange("All")}
      >
        <Image  id="all" src={allCategoryImage} alt="categoryImage.jpg" 
                height={imgHeight}>
        </Image>
        <p className="cat-img-p mt-3 text-capitalize">all</p>
      </Col>

      <Col className={`cat-box cat-img text-center ${(activeCategory.title === "Grocery") ? 'active' : ''}`}
            xs={2} lg={2} md={2} sm={2} xl={2}
            onClick={ () => handleOnCategoryChange("Grocery")}
      >
        <Image  id="all" src={imgGrocery} alt="categoryImage.jpg" 
                height={imgHeight}>
        </Image>
        <p className="cat-img-p mt-3 text-capitalize">Grocery</p>
      </Col>

      <Col className={`cat-box cat-img text-center ${(activeCategory.title === "Pharmacy") ? 'active' : ''}`}
            xs={2} lg={2} md={2} sm={2} xl={2}
            onClick={ () => handleOnCategoryChange("Pharmacy")}
      >
        <Image  id="all" src={imgPharmacy} alt="categoryImage.jpg" 
                height={imgHeight}>
        </Image>
        <p className="cat-img-p mt-3 text-capitalize">pharmacy</p>
      </Col>

      <Col className={`cat-box cat-img text-center ${(activeCategory.title === "Food") ? 'active' : ''}`}
            xs={2} lg={2} md={2} sm={2} xl={2}
            onClick={ () => handleOnCategoryChange("Food")}
      >
        <Image  id="all" src={imgFood} alt="categoryImage.jpg" 
                height={imgHeight}>
        </Image>
        <p className="cat-img-p mt-3 text-capitalize">food</p>
      </Col>

      <Col className={`cat-box cat-img text-center ${(activeCategory.title === "Electronics") ? 'active' : ''}`}
            xs={2} lg={2} md={2} sm={2} xl={2}
            onClick={ () => handleOnCategoryChange("Electronics")}
      >
        <Image  id="all" src={imgElectronics} alt="categoryImage.jpg" 
                height={imgHeight}>
        </Image>
        <p className="cat-img-p mt-3 text-capitalize">electronic</p>
      </Col>
    </Row>
  )
}

export default Category;