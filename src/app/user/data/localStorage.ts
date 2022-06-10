const TOKEN = 'postex-token'
const USERID = 'postex-user-id'

export function setStUser(token: string, userId: number) {
  try {
    window.localStorage.setItem(TOKEN, token)
    window.localStorage.setItem(USERID, String(userId))
  } catch(err) {
    const error = err as Error
    console.error(error)
    //Swal.fire('Error in localStorage', error.message, 'error')
  }
}