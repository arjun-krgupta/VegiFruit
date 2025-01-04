import React from 'react'
import ReactDom from 'react-dom/client'
import App from '../src/App'
import './index.css'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import rootReducer from '../src/Action/reducer/index'
const store=createStore(rootReducer)
console.log(store)


const root=ReactDom.createRoot(document.querySelector("#root"))
root.render(
    <>
    <Provider store={store}>
    <App/>
    </Provider>
    </>
)