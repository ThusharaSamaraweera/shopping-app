import React from "react";
import {Row, Col, Image} from "react-bootstrap";
import allCategoryImage from '../../asserts/images/all-cat.jpg';

const Category:React.FC = () => {
  const imgGrocery = 'https://s3.amazonaws.com/cdn1.shub/categories/grocery.png';
  const imgPharmacy = 'https://s3.amazonaws.com/cdn1.shub/categories/health.png';
  const imgFood = 'https://s3.amazonaws.com/cdn1.shub/categories/food.png';
  const imgElectronics = 'https://s3.amazonaws.com/cdn1.shub/categories/electro.png';
  const imgHeight = '100px';

  return (
    <Row className="category justify-content-around mt-2">
      <Col className={`cat-box cat-img text-center`}
            xs={2} lg={2} md={2} sm={2} xl={2}>
        <Image  id="all" src={allCategoryImage} alt="categoryImage.jpg" 
                height={imgHeight}>
        </Image>
        <p className="cat-img-p mt-3 text-capitalize">all</p>
      </Col>
      <Col className={`cat-box cat-img text-center`}
            xs={2} lg={2} md={2} sm={2} xl={2}>
        <Image  id="all" src={imgGrocery} alt="categoryImage.jpg" 
                height={imgHeight}>
        </Image>
        <p className="cat-img-p mt-3 text-capitalize">all</p>
      </Col>
      <Col className={`cat-box cat-img text-center`}
            xs={2} lg={2} md={2} sm={2} xl={2}>
        <Image  id="all" src={imgPharmacy} alt="categoryImage.jpg" 
                height={imgHeight}>
        </Image>
        <p className="cat-img-p mt-3 text-capitalize">all</p>
      </Col>
      <Col className={`cat-box cat-img text-center`}
            xs={2} lg={2} md={2} sm={2} xl={2}>
        <Image  id="all" src={imgFood} alt="categoryImage.jpg" 
                height={imgHeight}>
        </Image>
        <p className="cat-img-p mt-3 text-capitalize">all</p>
      </Col>
      <Col className={`cat-box cat-img text-center`}
            xs={2} lg={2} md={2} sm={2} xl={2}>
        <Image  id="all" src={imgElectronics} alt="categoryImage.jpg" 
                height={imgHeight}>
        </Image>
        <p className="cat-img-p mt-3 text-capitalize">all</p>
      </Col>
    </Row>
  )
}

export default Category;