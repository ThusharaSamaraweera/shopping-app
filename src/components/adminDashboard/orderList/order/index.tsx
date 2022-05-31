import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemTable from "./ItemTable";
import { useSelector } from "react-redux";
import { AppState } from "../../../../state/reducers";
import { IOrder } from "../../../../types/orderTypes";
import { IProducts } from "../../../../types/shoppingAreaTypes";
import moment from "moment";

interface params {
  orderCode: string;
}

const Order: React.FC = () => {
  const { orderCode }: params = useParams();
  const orders = useSelector((state: AppState) => state.orderReducer.orders);
  const [order, setOrder] = useState<IOrder>();

  useEffect(() => {
    const tempOrder: IOrder[] = orders.filter(
      (order) => order.orderCode === orderCode
    );
    setOrder(tempOrder[0]);
  }, [orderCode, order, orders]);

  return (
    <Row>
      <Col xs={12}>

        <ItemTable items={order?.productList} />
      </Col>
    </Row>
  );
};

export default Order;
