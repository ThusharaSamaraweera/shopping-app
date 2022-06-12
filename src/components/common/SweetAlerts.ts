import Swal, { SweetAlertIcon } from "sweetalert2";

export const Toast = (title: string, text: string, icon: SweetAlertIcon) => {
  Swal.fire({
    position: "top-end",
    icon: icon,
    title: title,
    text: text,
    showConfirmButton: false,
    timer: 3000,
    toast: true,
  }).then();
};

export const confirmationBox = async (
  message: string,
  confirmButtonText: string,
  denyButtonText: string,
  text: string,
  icon: SweetAlertIcon
) => {
  return await Swal.fire({
    icon: icon,
    title: message,
    text: text,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: confirmButtonText,
    denyButtonText: denyButtonText,
  });
};
