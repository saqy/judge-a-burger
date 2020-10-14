import React from 'react';
import Styles from './BuildControl.module.css'
const BuildControl =  (props) => (
    
    <div className={Styles.BuildControl}>
        <div className={Styles.Label}>{props.label}</div>
        <button 
            className={Styles.Less}
            onClick={props.removed}
            disabled={props.disabled}
        >Less
        </button>

        <button 
            className={Styles.More}
            onClick={props.added}
            // disabled={props.disabled}
        >More</button>
    </div>
)

export default BuildControl;
