import React from 'react';
import Styles from './BackDrops.module.css';

const Backdrop = (props) =>(
    props.shows ? <div className={Styles.Backdrop} onClick = {props.clicked}>  </div> : null
)

export default Backdrop;
