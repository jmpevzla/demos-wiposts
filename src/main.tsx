import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppView from './app/main/view/AppView'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppView />
  </React.StrictMode>
)
