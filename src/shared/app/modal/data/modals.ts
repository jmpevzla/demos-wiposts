import Swal from "sweetalert2"

export async function showSuccess(message: string) {
  return await Swal.fire({
    title: "Success!",
    icon: "success",
    text: message,
    background: 'var(--background-auth)',
    color: 'var(--txt)',
    toast: true,
    timerProgressBar: true,
    timer: 1000,
    position: "top",
    showConfirmButton: false,
  });
}

export async function showError(message: string) {
  return await Swal.fire({
    title: "Error",
    icon: "error",
    text: message,
    background: 'var(--background-auth)',
    color: 'var(--txt)',
    toast: true,
    timerProgressBar: true,
    timer: 3000,
    position: "top",
    showConfirmButton: false,
  });
}