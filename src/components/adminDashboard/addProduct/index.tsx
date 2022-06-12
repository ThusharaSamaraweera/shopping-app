import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { RcFile } from "antd/lib/upload/interface";
import { Col, Row } from "react-bootstrap";
import AddProductPreview from "./AddProductPreview";
import ImageCrop from "./ImageCrop";
import { firebaseStorage } from "../../../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../../graphQL/products/productMutations";
import { Toast } from "../../common/SweetAlerts";
import { useSelector } from "react-redux";
import { AppState } from "../../../state/reducers";
import moment from "moment";

const AddProduct = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [formValues, setFormValues] = useState({
    discount: 0,
    regular_price: 0,
    title: "XXX",
    productImage: "",
    quantity: 0,
    category: ""
  });
  const [imgSrc, setImgSrc] = useState<RcFile | null>(null);
  const [addProduct] = useMutation(ADD_PRODUCT)
  const [loading, setLoading] = useState<boolean>(false)
  const allCategories = useSelector((state: AppState) => state.category.allCategories)

  const getProductCode = () => {
    const date: string = moment().format('YYYYMMDD');
    const randomString: string = String(Math.floor(Math.random() * 9999));
    return date + "PDT" + randomString;
  };

  const createProduct = async (fileUrl: string) => {
    return await addProduct({
      variables: {
        newProduct: {
          title: formValues.title,
          category: {
            title: formValues.category
          },
          quantity: formValues.quantity - 0,
          regular_price: formValues.regular_price - 0,
          discount_price: formValues.regular_price - formValues.discount,
          image: fileUrl
        }
      }
    })
  }

  const handleOnSubmit = async (values: any) => {
    setLoading(true)
      
    if (!imgSrc) return;

    // create code for product image file name
    const imgId = getProductCode()

    const storageRef = ref(firebaseStorage, `files/products/${formValues.title}-${imgId}`);
    //@ts-ignore
    const uploadTask = uploadBytesResumable(storageRef, imgSrc);
      
    // upload to firebase
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // console.log(Math.round((snapshot.bytesTransferred / snapshot.totalBytes)* 100));
      },
      (err) => console.log(err),
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref)
          .then( async (res) => {
            await createProduct(res)
            .then((res) => {
              Toast("Add product successfully", "", "success")
              form.resetFields()
            })
            .catch((err) => {
              console.log(err)
              Toast("Failed to create product", "", "error")
            })
          })
          .catch((err) => console.log(err));
      }
    );

    setLoading(false)
  };

  const renderCategories = allCategories.map((category) => {
    return (
      <Option value={category.title} key={category.id}>
        {category.title}
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
    setFormValues(allValues);
  };

  return (
    <Row className="add-product">
      <Col xs={12}>
        <Row>
          <Col xs={12} className="add-product-page-title fw-bold">
            AddProduct
          </Col>

          <Col xs={12} lg={5} className="create-product-preview">
            <AddProductPreview
              quantity={1}
              discount={formValues.discount}
              price={formValues.regular_price}
              productName={formValues.title}
              productImage={imgSrc}
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

                  <ImageCrop setImgSrc={setImgSrc} />
                </Col>

              </Row>

              <Row>
                <Col xs={12}>
                  <Button htmlType="submit" className="create-product-btn fs-5" loading={loading}>
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
