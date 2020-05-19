import React,{ Component } from 'react'
import { inject, observer } from 'mobx-react'

// use decorators
@inject('ui', 'auth')
@observer

class Header extends Component {

    render() {
        const { ui, auth } = this.props;
        return(
            <>
                <button onClick={ui.toggleMenu}>{ui.menuOpen ? "Menu Close" : "Menu Open"}</button>
                {auth.isLogin ? <button onClick={auth.logout}>Logout</button> : <button onClick={auth.login}>Login</button>}
            </>
        )
    }
    
}
export default Header