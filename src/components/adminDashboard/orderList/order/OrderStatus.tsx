import React, { useEffect, useState } from "react";
import Select from "react-select";
import { IOrder } from "../../../../types/orderTypes";
import { styleSelect } from "./orderConstants";
import { IOrderStatus } from "../../../../types/orderTypes";
import { confirmationBox } from "../../../common/SweetAlerts";
import { useMutation } from "@apollo/client";
import { CHANGE_ORDER_STATUS } from "../../../../graphQL/order/orderMutation";


type OrderStatusProps = {
  order: IOrder | null;
};

const OrderStatus: React.FC<OrderStatusProps> = (props) => {
  const { order } = props;

  const [selectedStatus, setSelectedStatus] = useState<IOrderStatus>({
    value: order?.status,
    label: order?.status,
  });
  const [changeOrderStatus] = useMutation(CHANGE_ORDER_STATUS)

  useEffect(() => {
    setSelectedStatus({
      value: order?.status,
      label: order?.status,
    });
  }, [order]);

  const statusOptions = (status: string | null | undefined) => {
    if (status === "requested") {
      return [
        { value: "approved", label: "Approve" },
        { value: "rejected", label: "Reject" },
      ];
    } else {
      return [];
    }
  };

  const handleOnStatusChanged = (selectStatus: IOrderStatus | null) => {
    if (!selectStatus) {
      return;
    }
    confirmationBox(`Are you sure to change state of order : ${order?.orderCode} to ${selectStatus.label}`,
      `Change to ${selectStatus.label}`,
      'No',
      'You won\'t be able to revert this!',
      'question'
    ).then( async ({isConfirmed}) => {
       if(isConfirmed){
         console.log(order?.id)
         
        //  await changeOrderStatus({
        //    variables: {
        //      id: order?.id,
        //      newStatus: selectStatus.value
        //     }
        //   }).then((res) => {
        //     console.log(res)
        //     setSelectedStatus({
        //       value: selectStatus?.value,
        //       label: selectStatus?.label,
        //     });
        // })
      }
    })

  };

  return (
    <React.Fragment>
      <Select
        value={selectedStatus}
        styles={styleSelect}
        options={statusOptions(order?.status)}
        onChange={(selected: IOrderStatus | null) => {
          handleOnStatusChanged(selected);
        }}
      />
    </React.Fragment>
  );
};

export default OrderStatus;
