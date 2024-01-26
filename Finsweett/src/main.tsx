import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Montserrat&family=Roboto:wght@300&display=swap');
</style>

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
