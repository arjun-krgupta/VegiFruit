import React from 'react'
import ReactDom from 'react-dom/client'
import App from '../src/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const root=ReactDom.createRoot(document.querySelector("#root"))
root.render(
    <>
   <BrowserRouter>
   <App/>
   </BrowserRouter>
    </>
)