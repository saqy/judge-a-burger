import React, { Component } from 'react'
import Auxiliar from '../../hoc/Auxiliar';
import Styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render(){
        return(
            <Auxiliar>            
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                        open = {this.state.showSideDrawer}
                        closed = {this.sideDrawerClosedHandler} />
                    <main className={Styles.Content} style={{marginTop:'100px'}}>
                        {this.props.children}
                    </main>
            </Auxiliar>
        )
    }    
}
 export default Layout;