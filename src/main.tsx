import React from 'react'
import ReactDOM from 'react-dom/client'
import AppView from './main/view/AppView'
import 'sweetalert2/dist/sweetalert2.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppView />
  </React.StrictMode>
)
