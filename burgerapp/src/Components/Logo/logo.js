import React from 'react';
import Logo from './../../assets/logo.png';
import Styles from './logo.module.css';

const logo = (props) => {
    return (
        <div className={Styles.Logo} style={{height: props.height}}>
            <img src={Logo}></img>
        </div>
    );
}

export default logo;
