import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemTable from "./ItemTable";
import { useSelector } from "react-redux";
import { AppState } from "../../../../state/reducers";
import { IOrder } from "../../../../types/orderTypes";
import moment from "moment";
import TotalPrice from "./TotalPrice";
import OrderStatus from "./OrderStatus";

interface params {
  orderCode: string;
}

const Order: React.FC = () => {
  const { orderCode }: params = useParams();
  const orders = useSelector((state: AppState) => state.orderReducer.orders);
  const [order, setOrder] = useState<IOrder | null>(null);

  useEffect(() => {
    const tempOrder: IOrder[] = orders.filter(
      (order) => order.orderCode === orderCode
    );

    setOrder(tempOrder[0]);
  }, [orderCode, order, orders]);

  return (
    <Row className="order-page">
      <Col xs={12}>
        <Row className="order-details-card px-2 py-4">
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
          <Col xs={12} md={6} className='mt-2'>
            <h5>Order Status</h5>
            <OrderStatus order={order} />
          </Col>
        </Row>
        <Row className="billing-user-details p-2 mt-4 mb-4">
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

        {
          order?.deliveryInstructions && 
          <Row className="delivery-instructions p-2 mt-4 mb-4">
            <h5>Delivery instructions</h5>
            <h6>{order?.deliveryInstructions}</h6>
          </Row>
        }
        <ItemTable items={order?.productList} />

        <TotalPrice items={order?.productList} />
      </Col>
    </Row>
  );
};

export default Order;
