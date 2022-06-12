import { UploadFile } from "antd/lib/upload/interface";
import React, { useEffect } from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";

type AddProductPreviewProps = {
  productName: string;
  price: number;
  discount: number;
  productImage: UploadFile | null;
  quantity: number;
};

const AddProductPreview: React.FC<AddProductPreviewProps> = (props) => {
  const image: any = require(`../../../asserts/images/insertImage.webp`);
  const { productName, price, discount, quantity, productImage } = props;

  useEffect(() => {
    renderImage()
  }, [props.productImage])

  const priceMain = (price: number): number | string => {
    if (price < 0) {
      return price;
    }
    return Math.trunc(price);
  };

  const priceCents = (price: number) => {
    if (price % 1 === 0) {
      return "00";
    } else {
      return Math.trunc((price % 1) * 100);
    }
  };

  const renderImage = () => {
    if (!productImage) {
      return <Image className="img" src={image.default} alt="Image" />
    }
    //@ts-ignore
    return <Image className="img" src={productImage.thumbUrl} alt="Image" />
  };

  return (
    <React.Fragment>
      <Col xs={12} className="product-preview-title">
        Preview
      </Col>
      <Col className="product px-2 " lg="3" md="4" xs="6">
        <Row className="product-item py-2">
          <Col className="img-col" xs="12">
            {renderImage()}
          </Col>
          <Col xs="12" className="product-name py-0">
            <h6>{productName ? productName : ""}</h6>
          </Col>
          <Col className="regular-price pb-2" xs={6}>
            <NumberFormat
              displayType={"text"}
              prefix={"Rs. "}
              decimalScale={2}
              fixedDecimalScale={true}
              thousandSeparator={true}
              value={price}
            />
          </Col>
          <Col className="discount-price pb-2" xs={6}>
            <NumberFormat
              displayType={"text"}
              prefix={"Rs. "}
              thousandSeparator={true}
              value={priceMain(price! - discount!)}
            />
            {discount && price ? (
              <span className="decimal-value">
                .{priceCents(price - discount)}
              </span>
            ) : (
              ""
            )}
          </Col>

          <Col xs={4}>
            <input
              type="number"
              disabled={true}
              min={0}
              className="product-count w-100"
              value={quantity}
            />
          </Col>
          <Col xs={8} className="product-btn">
            <Button disabled={true} className="product-add-btn">
              Add To Cart
            </Button>
          </Col>
        </Row>
      </Col>
    </React.Fragment>
  );
};

export default AddProductPreview;
