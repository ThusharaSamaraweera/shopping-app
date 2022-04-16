import Swal, {SweetAlertIcon} from "sweetalert2";

export const Toast = (title: string, text: string, icon: SweetAlertIcon) => {
  Swal.fire({
    position: 'top-end',
    icon: icon,
    title: title,
    text: text,
    showConfirmButton: false,
    timer: 3000,
    toast: true,
  }).then();
}