import React from 'react'
import { inject, observer } from 'mobx-react';

const Component2 = inject('ui', 'auth')(observer(props => {
    const { ui, auth } = props;
    return(
        <>
            {ui.menuOpen ? <p>Menu Open</p> : <p>Menu Close</p>}
            {auth.isLogin ? <p>Login</p> : <p>Logout</p>}
        </>
    )
}))

export default Component2