interface swalAlertAtt {
    icon: 'success' | 'error' | 'warning' | 'info' | 'question'; 
}

import Swal from "sweetalert2";

export const swalAlert = (title: string, text: string, icon: swalAlertAtt['icon']) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'Cool'
    });
};
