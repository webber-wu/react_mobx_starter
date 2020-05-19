import React from 'react'
import "../styles/indexUI.scss"
import MobX from '../asset/images/mobx.png'
import Button from "../components/button"
import Status from '../components/status'

function IndexUI(props) {
    return(
        <div>
            <div className="mobx">
                <img src={MobX} alt="mobx"/>
            </div>
            <div className="button">
                <Button />
            </div>
            <div className="status">
                <Status />
            </div>
        </div>
    )
}

export default IndexUI