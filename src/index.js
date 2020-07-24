import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter, HashRouter } from "react-router-dom"
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
const AppRouter = process.env.DEMO === "demo" ? (
    <HashRouter>
        <App />
    </HashRouter>
    ) : (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


window.onload = () => {
    ReactDOM.render(
        <Provider 
            rootStore={rootStore}
            ui={rootStore.uiStore}
            auth={rootStore.authStore}
        >{AppRouter}</Provider>,
        document.getElementById('app')
    )
}