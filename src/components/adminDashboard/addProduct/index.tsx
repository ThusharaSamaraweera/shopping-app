import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import AddProductPreview from "./AddProductPreview";

const AddProduct = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [formValues, setFormValues] = useState({
    discount: 0,
    regular_price: 0,
    title: "XXX",
    productImage: "",
    quantity: 0
  });

  const category = ["category 1", "category 2", "category 3"];

  const handleOnSubmit = (values: any) => {};

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

  const handleOnChange = (changedValue: any, allValues: any) => {
    console.log(allValues);
    setFormValues(allValues)
  };

  return (
    <Row className="add-product">
      <Col xs={12}>
        <Row>
          <Col xs={12} className="add-product-page-title">
            AddProduct
          </Col>

          <Col xs={12} lg={5} className="create-product-preview">
            <AddProductPreview
              quantity={formValues.quantity}
              discount={formValues.discount}
              price={formValues.regular_price}
              productName={formValues.title}
              productImage={formValues.productImage}
            />
          </Col>

          <Col xs={12} lg={7} className="add-product-form">
            <Form
              name="basic"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              form={form}
              onFinish={handleOnSubmit}
              onValuesChange={handleOnChange}
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
                      {
                        required: true,
                        message: "Please enter product category",
                      },
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
                      {
                        required: true,
                        message: "Please enter product quantity",
                      },
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

                <Col xs={12}>
                  <Button htmlType="submit" className="create-product-btn">
                    Create product
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AddProduct;
