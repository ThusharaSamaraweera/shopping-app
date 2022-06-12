import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import NumberFormat from 'react-number-format'
import { IProducts } from '../../../../types/shoppingAreaTypes'
import DeliveryCharge from '../../../checkoutArea/DeliveryCharge'
import TotalBill from '../../../checkoutArea/TotalBill'

type TotalPriceProps = {
  items: IProducts | undefined
}

const TotalPrice: React.FC <TotalPriceProps> = (props) => {
  const {items} = props;
  const [subTotal, setSubTotal] = useState<number>(0)
  const [deliveryCharge, setDeliveryCharge] = useState<number>(1000)

  const calTotal = () => {
    if(!items){
      return 0;
    }

    //@ts-ignore
    const subTotalPrice = items.reduce((total: number, b: IProduct) =>
    total + (b.discount_price * b.quantity), 0);
    setSubTotal(subTotalPrice)
  }

  useEffect(() => {
    calTotal()
  }, [items])

  return (
    <Row>
      <Col xs={{offset: '4', span: '8'}} className='total-bill-section'>
          <Col xs={12} className='total-price '>
            <Row className='py-2 ml-4'>
              <Col className='total-bill-label'>Total price: </Col>
              <Col className='text-end total-bill-price'>
                <NumberFormat value={subTotal}
                              thousandSeparator={true}
                              displayType='text'
                              prefix={'Rs. '}
                              decimalScale={2}
                              fixedDecimalScale={true}
                />
              </Col>
            </Row>
          </Col>

        <DeliveryCharge deliveryCharge={deliveryCharge} />
        <TotalBill subTotalPrice={deliveryCharge + subTotal}/>
      </Col>
    </Row>
  )
}

export default TotalPrice