import "./styles/App.scss"
import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import IndexUI from "./containers/indexUI"

class App extends Component {
    render() {
        return (
            <>
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={IndexUI} />
                    </Switch>
                </div>
            </>
        )
    }
}

export default App