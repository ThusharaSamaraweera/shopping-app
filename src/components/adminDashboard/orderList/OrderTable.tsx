import { Table } from 'antd';
import React from 'react'
import { Row } from 'react-bootstrap'
import type { ColumnsType } from 'antd/lib/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns : ColumnsType<DataType> = [
  {
    title: "Order code",
    dataIndex: "orderCode",
    key: 'orderCode'
  },
  {
    title: "Order Date",
    dataIndex: "orderDate",
    key: 'orderDate'
  },
  {
    title: "Total price",
    dataIndex: "totalPrice",
    key: "totalPrice"
  },
  {
    title: "Status",
    dataIndex: 'Status',
    key: 'status'
  }
]

const OrderTable = () => {
  return (
    <Row>
      <Table columns={columns} />
    </Row>
  )
}

export default OrderTable