import React from "react";
import { Table } from "antd";
import { Row } from "react-bootstrap";
import NumberFormat from "react-number-format";

import { smallCentsWithPrefix } from "../../../common/NumberCommon";

const ItemTable = (props) => {
  const { items } = props;

  const columns = [
    {
      title: "",
      key: "index",
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text) => <>{text.title}</>,
    },
    // {
    //   title: "Discount",
    //   dataIndex: "discount_price",
    //   key: "itemPrice",
    //   render: (text, record) => {
    //     return (
    //       <NumberFormat
    //         value={record.regular_price - record.discount_price}
    //         thousandSeparator={true}
    //         displayType="text"
    //         prefix={"Rs. "}
    //         decimalScale={2}
    //         fixedDecimalScale={true}
    //         renderText={smallCentsWithPrefix}
    //       />
    //     );
    //   },
    // },
    {
      title: "Item price",
      dataIndex: "discount_price",
      key: "itemPrice",
      render: (text) => {
        return (
          <NumberFormat
            value={text}
            thousandSeparator={true}
            displayType="text"
            prefix={"Rs. "}
            decimalScale={2}
            fixedDecimalScale={true}
            renderText={smallCentsWithPrefix}
          />
        );
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "regular_price",
      key: "regularPrice",
      render: (text, record) => {
        return (
          <NumberFormat
            value={
              record.quantity
                ? record.quantity *
                  record.discount_price
                : record.discount_price
            }
            thousandSeparator={true}
            displayType="text"
            prefix={"Rs. "}
            decimalScale={2}
            fixedDecimalScale={true}
            renderText={smallCentsWithPrefix}
          />
        );
      },
    },
  ];

  return (
    <Row className='item-table-section p-2 mt-4 mb-4'>
      <h5>Items list</h5>
      <Table columns={columns} dataSource={items} rowKey={items?.id} />
    </Row>
  );
};

export default ItemTable;
