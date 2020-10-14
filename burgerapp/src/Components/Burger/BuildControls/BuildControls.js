import React from 'react';
import Styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]

const BuildControls = (props) => (
    <div className={Styles.BuildControls}>
        <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl 
            key={ctrl.label}
            label={ctrl.label}
            type={ctrl.type}
            added={()=>{props.addingredeienthandler(ctrl.type)}}
            removed={()=>{props.removeingredeienthandler(ctrl.type)}}
            disabled={props.disabled[ctrl.type]}
            />
        ))}

        <button 
            className={Styles.btn} 
            disabled={!props.purchaseable}
            onClick={props.ordered}
        >Order Now</button>
    </div>
)
export default BuildControls;