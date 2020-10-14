import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from './../../../hoc/Auxiliar';
import Styles from './SideDrawer.module.css';
import Logo from './../../Logo/logo';

const sideDrawer = ( props ) => {
    let attachedStyles = [Styles.SideDrawer, Styles.Close];
    if (props.open) {
        attachedStyles = [Styles.SideDrawer, Styles.Open];
    }
    return (
        <Aux> 
            <Backdrop shows={props.open} clicked = { props.closed}/>
            <div style={{background:'black',color:'white'}} className={attachedStyles.join(' ')}>
                <div className={Styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;