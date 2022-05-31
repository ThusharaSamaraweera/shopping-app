import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ItemTable from './ItemTable'
import {useSelector} from 'react-redux'
import { AppState } from '../../../../state/reducers'
import { IOrder } from '../../../../types/orderTypes'
import { IProducts } from '../../../../types/shoppingAreaTypes'

interface params {
  orderCode: string
}

const Order: React.FC = () => {
  const {orderCode}: params = useParams()
  const orders = useSelector((state : AppState ) => state.orderReducer.orders)
  const [items, setItems] = useState<IProducts>()

  useEffect(() => {
    const tempOrder: IOrder[] = orders.filter((order) => order.orderCode === orderCode)
    setItems(tempOrder[0].productList)
  }, [orderCode, items, orders])

  return (
    <Row>
      <div>order id: {orderCode} </div>
      <ItemTable items={items} />
    </Row>
  )
}

export default Order