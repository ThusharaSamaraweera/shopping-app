import { Button, Table } from "antd";
import moment from "moment";
import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const OrderTable = () => {
  const orders = useSelector((state) => state.orderReducer.orders);
  const history = useHistory();

  const handleOnClickViewOrder = (orderCode) => {
    history.push(`orders/${orderCode}`);
  };

  const columns = [
    {
      title: "Order code",
      dataIndex: "orderCode",
      key: "orderCode",
    },
    {
      title: "Billing name",
      dataIndex: "requestedUser",
      key: "requestedUser",
      render: (text) => {
        return (
          <>{text.name}</>
          )
      }
    },
    {
      title: "Order Date",
      dataIndex: "requestedDate",
      key: "orderDate",
      render: (text) => {
        const time = moment(text).format("LLL");
        return <>{time}</>;
      },
    },
    {
      title: "Order status",
      dataIndex: "status",
      key: "orderStatus",
    },
    {
      title: "",
      dataIndex: "",
      //@ts-ignore
      render: (text, record, index) => (
        <Button onClick={() => handleOnClickViewOrder(record.orderCode)}>
          view
        </Button>
      ),
    },
  ];

  return (
    <Row>
      <Table columns={columns} dataSource={orders} rowKey={orders.orderCode} />
    </Row>
  );
};

export default OrderTable;
