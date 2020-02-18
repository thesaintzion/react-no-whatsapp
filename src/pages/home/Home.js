import React, { Component, Fragment } from 'react';
import './Home.scss';

// Import pages
import Conversation from './conversation/Conversation';
import Users from './users/Users';

class Home extends Component {

     showReg = () => {
        // return this.props.registered ? <Login /> :  <Registration /> ;
        return null ;

    }
    render() {
        return (
            <Fragment>
          <div className="clearfix">
            <aside className="sidebar">
            <Users />
            </aside>
            <main className="main">
            <Conversation />
            </main>
            </div>
            </Fragment>
        )
    }
}

export default Home;
           

