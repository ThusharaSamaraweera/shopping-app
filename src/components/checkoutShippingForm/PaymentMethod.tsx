import React from 'react';
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { changeCheckoutForm } from '../../state/actions/checkoutFormActions';
import {AppState} from "../../state/reducers";

const PaymentMethod: React.FC = () => {
    const dispatch = useDispatch();
    const checkoutForm = useSelector((state: AppState) => state.checkoutForm);

    const handleOnClickCredit = () => {

      dispatch(changeCheckoutForm({key: 'paymentMethod', value: 'onlinePayment'}));
    };

    const handleOnClickMoney = () => {
      dispatch(changeCheckoutForm({key: 'paymentMethod', value: 'cashOnDelivery'}));
    };

    return (
      <Row className="payment-method-option">
        <Col>
          <h5>Payment Methods</h5>
          <Row className='flex-fill justify-content-around'>
            <Col xs={5} sm={5}
                className={"mt-2 credit-card-bg " + (checkoutForm.paymentMethod === "onlinePayment" && "selected-card")}
                onClick={handleOnClickCredit}>
              <i className="far fa-credit-card fa-2x"/>
              <div>
                <label className="payment-label-name">Credit/Debit Card</label>
              </div>
            </Col>
            <Col xs={5} sm={5}
                className={"mt-2 credit-card-bg " + (checkoutForm.paymentMethod === "cashOnDelivery" && "selected-card")}
                onClick={handleOnClickMoney}>
              <i className="far fa-money-bill-alt fa-2x"/>
              <div>
                <label className="payment-label-name">Cash on Delivery</label>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
;

export default PaymentMethod;