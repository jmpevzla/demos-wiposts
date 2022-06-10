import type { Modal } from "./modalEntity"

function create(): Modal {
  return {
    type: 'success',
    message: ''
  }
}

export { create, }