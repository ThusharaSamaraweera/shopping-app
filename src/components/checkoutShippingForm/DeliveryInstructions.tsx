import React from 'react';
import {Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { changeCheckoutBillingForm } from '../../state/actions/checkoutFormActions';
import {AppState} from "../../state/reducers";

const DeliveryInstructions: React.FC = () => {

  const dispatch = useDispatch();
  const shippingForm = useSelector((state: AppState) => state.checkoutForm);

  const handleOnChangeDeliveryInstructions = (deliveryInstructions: string) => {
    dispatch(changeCheckoutBillingForm({key: 'deliveryInstructions', value: deliveryInstructions}))
  }

  return (
    <Row className='delivery-instructions-area'>
      <div className='mt-1 mb-3'>
        <p className='address-title'>Add Delivery Instructions (Optional)</p>
        <Form.Control as="textarea"
                      rows={3}
                      value={shippingForm.deliveryInstructions}
                      onChange={(event) => {
                        handleOnChangeDeliveryInstructions(event.target.value)
                      }}
        />
      </div>
    </Row>
  );
};

export default DeliveryInstructions;