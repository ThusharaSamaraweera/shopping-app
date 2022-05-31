import React from 'react' 
import { Table } from 'antd';
import { Row } from 'react-bootstrap';

const ItemTable = (props) => {
  const {items} = props;

  const columns = [
    {
      title: '',
      key: 'index',
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text) => (
        <>{text.title}</>
      )
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Regular price',
      dataIndex: 'regular_price',
      key: 'regularPrice',
    },
    {
      title: 'Discount price',
      dataIndex: 'discount_price',
      key: 'discountPrice',
    }
  ]

  return (
    <Row>
      <Table columns={columns} dataSource={items} rowKey={items?.id} />
    </Row>
  )
}

export default ItemTable