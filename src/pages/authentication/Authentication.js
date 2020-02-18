import React, { Component, Fragment } from 'react';
import './Authentication';

// Import other pages 
import Registration from './registration/Registration';
import Login from './login/Login';

class Authentication extends Component {

     showReg = () => {
        return this.props.registered ? <Login /> :  <Registration /> ;
    }
    render() {
        return (
            <Fragment>


{ this.showReg() }


            </Fragment>
        )
    }
}

export default Authentication;
           

