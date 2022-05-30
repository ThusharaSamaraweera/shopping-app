import { Button, Table } from 'antd';
import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const columns = [
  {
    title: "Order code",
    dataIndex: "orderCode",
    key: 'orderCode'
  },
  {
    title: "Order Date",
    dataIndex: "requestedDate",
    key: 'orderDate'
  },
  {
    title: "Total price",
    dataIndex: "totalPrice",
    key: "totalPrice"
  },
  {
    title: "Order status",
    dataIndex: 'status',
    key: 'orderStatus'
  },
  {
    title: "",
    dataIndex: '',
    //@ts-ignore
    render: (text, record, index) => (
      <Button>
        view
      </Button>
    )
  }
]

const OrderTable = () => {
  const orders = useSelector((state ) => state.orderReducer.orders)

  console.log(orders)

  return (
    <Row>
      <Table columns={columns} dataSource={orders} rowKey={orders.orderCode} />
    </Row>
  )
}

export default OrderTable