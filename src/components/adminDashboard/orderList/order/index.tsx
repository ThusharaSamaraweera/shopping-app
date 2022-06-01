import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemTable from "./ItemTable";
import { useSelector } from "react-redux";
import { AppState } from "../../../../state/reducers";
import { IOrder } from "../../../../types/orderTypes";
import moment from "moment";
import { IProduct, IProducts } from "../../../../types/shoppingAreaTypes";
import TotalPrice from "./TotalPrice";

interface params {
  orderCode: string;
}

const Order: React.FC = () => {
  const { orderCode }: params = useParams();
  const orders = useSelector((state: AppState) => state.orderReducer.orders);
  const [order, setOrder] = useState<IOrder>();

  const calTotal = (items: IProducts) => {
    //@ts-ignore
    const subTotalPrice = items.reduce((total: number, b: IProduct) =>
    total + ((b.regular_price - b.discount_price) * b.quantity), 0);
    console.log(subTotalPrice)
  }
  
  useEffect(() => {
    const tempOrder: IOrder[] = orders.filter(
      (order) => order.orderCode === orderCode
    );
    console.log(tempOrder)
    calTotal(tempOrder[0].productList)
    setOrder(tempOrder[0]);
  }, [orderCode, order, orders]);

  return (
    <Row className="order-page">
      <Col xs={12}>
        <Row className="order-details-card">
          <Col xs={12} md={6}>
            <h6>Order id: {orderCode}</h6>
            <h6>Order date: {moment(order?.requestedDate).format("lll")}</h6>
            <h6>
              Payment type:{" "}
              {order?.paymentType === "cashOnDelivery"
                ? "Cash on Delivery"
                : "Online payment"}
            </h6>
          </Col>
        </Row>
        <Row className="billing-user-details mt-4 mb-4">
          <Col xs={12} lg={6} className='mt-2 mb-2'>
            <h5>Billing details</h5>
            <h6>Name : {order?.requestedUser.name} </h6>
            <h6>Contact number : {order?.requestedUser.phoneNumber} </h6>
            <h6>Postal code: {order?.requestedUser.postalCode} </h6>
            <h6>Address : {order?.requestedUser.address} </h6>
            <h6>City : {order?.requestedUser.city} </h6>
            <h6>Country : {order?.requestedUser.country} </h6>
          </Col>

          <Col xs={12} lg={6} className='mt-2 mb-2'>
            <h5>Shipping details</h5>
            <h6>Name : {order?.shippingDetails.fullName} </h6>
            <h6>Contact number : {order?.shippingDetails.contactNumber} </h6>
            <h6>Postal code: {order?.shippingDetails.postalCode} </h6>
            <h6>Address : {order?.shippingDetails.address} </h6>
            <h6>City : {order?.shippingDetails.city} </h6>
            <h6>Country : {order?.shippingDetails.country} </h6>
          </Col>
        </Row>

        <ItemTable items={order?.productList} />

        <TotalPrice />
      </Col>
    </Row>
  );
};

export default Order;
