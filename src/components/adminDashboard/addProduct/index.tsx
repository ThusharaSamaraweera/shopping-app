import { Form, Input, Select } from "antd";
import React from "react";
import { Col, Row } from "react-bootstrap";

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

  const checkPrice = (_: any, value: number) => {
    if (value > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Price must be greater than zero!'));
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue={'Rs'} >
        <Option value="Rs">Rs</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Row className="add-product">
      <Col xs={12} className="add-product-page-title">
        AddProduct
      </Col>
      <Col xs={12}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
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
                  { validator: checkPrice},
                ]}
              >
                <Input addonBefore={prefixSelector} placeholder="Enter product name" type='number' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default AddProduct;
