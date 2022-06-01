import {Col, Row} from "react-bootstrap";
import NumberFormat from "react-number-format";

type TotalBillProps = {
  subTotalPrice: number,
}

const TotalBill: React.FC<TotalBillProps> = (props) => {
  const {subTotalPrice} = props;
  
  return (
    <Col xs={12}>
      <Row className='mx-4 total-bill py-2'>
        <Col className='total-bill-label'>Total price: </Col>
        <Col className='text-end total-bill-price'>
          <NumberFormat value={subTotalPrice}
                        thousandSeparator={true}
                        displayType='text'
                        prefix={'Rs. '}
                        decimalScale={2}
                        fixedDecimalScale={true}
          />
        </Col>
      </Row>
    </Col>
  )
}

export default TotalBill
