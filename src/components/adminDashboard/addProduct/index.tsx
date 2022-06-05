import { Form, Input, Select } from "antd";
import React from "react";
import { Col, Row } from "react-bootstrap";
import AddProductPreview from "./AddProductPreview";

const AddProduct = () => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const category = ["category 1", "category 2", "category 3"];

  const HandleOnSubmit = (values: any) => {};

  const renderCategories = category.map((category) => {
    return (
      <Option value={category} key={category}>
        {category}
      </Option>
    );
  });

  const checkNumber = (_: any, value: number) => {
    if (value > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Price must be greater than zero!"));
  };

  const pricePrefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue={"Rs"}>
        <Option value="Rs">Rs</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Row className="add-product">
      <Col xs={12} className="add-product-page-title">
        AddProduct
      </Col>
      <Row>
        <Col xs={12} lg={5} className='create-product-preview'>
          <AddProductPreview
            discount={10}
            price={200.00} productName={"temp"} productImage={null}          
          />
        </Col>
        <Col xs={12} lg={7}>
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            form={form}
            onFinish={HandleOnSubmit}
            className="add-product-form"
          >
            <Row>
              <Col xs={12} md={6}>
                <Form.Item
                  name="title"
                  label="Product name"
                  hasFeedback
                  rules={[
                    { required: true, message: "Please enter product name" },
                  ]}
                >
                  <Input placeholder="Enter product name" />
                </Form.Item>

                <Form.Item
                  name="category"
                  label="Product category"
                  hasFeedback
                  rules={[
                    { required: true, message: "Please enter product category" },
                  ]}
                >
                  <Select placeholder="Select category">
                    {renderCategories}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="quantity"
                  label="Product quantity"
                  hasFeedback
                  rules={[
                    { required: true, message: "Please enter product quantity" },
                    { validator: checkNumber },
                  ]}
                >
                  <Input placeholder="Enter product name" type="number" />
                </Form.Item>
              </Col>

              <Col xs={12} md={6}>
                <Form.Item
                  name="regular_price"
                  label="Product regular price"
                  hasFeedback
                  rules={[
                    { required: true, message: "Please enter regular price" },
                    { validator: checkNumber },
                  ]}
                >
                  <Input
                    addonBefore={pricePrefixSelector}
                    placeholder="Enter product  regular price"
                    type="number"
                  />
                </Form.Item>

                <Form.Item
                  name="discount"
                  label="Discount"
                  hasFeedback
                  rules={[
                    { required: true, message: "Please enter regular price" },
                    { validator: checkNumber },
                  ]}
                >
                  <Input
                    defaultValue={0.0}
                    addonBefore={pricePrefixSelector}
                    placeholder="Enter product  discount"
                    type="number"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Row>
  );
};

export default AddProduct;
