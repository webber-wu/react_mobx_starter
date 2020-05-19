import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'mobx-react'
import UIStore from './store/uiStore'
import AuthStore from './store/authStore'


class RootStore {
    constructor() {
        this.uiStore = new UIStore();
        this.authStore = new AuthStore();
    }
}

const rootStore = new RootStore();


ReactDOM.render(
    <Provider 
        rootStore={rootStore}
        ui={rootStore.uiStore}
        auth={rootStore.authStore}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)