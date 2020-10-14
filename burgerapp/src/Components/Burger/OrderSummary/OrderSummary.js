import React from 'react';
import Aux from './../../../hoc/Auxiliar';
import Styles from './OrderSummary.module.css';
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredSummary = Object.keys(  props.ingredients )
    .map(igkey=>{
        return <li className='list' key={igkey}><span style=
        {{textTransform:'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}</li>
    }) 
    return (
        <Aux>
        <div style={{background:'black',color:'white',padding:'5px 15px'}}>
            <h3 className={Styles.head}>Your Order</h3>
            <p>Ingredients are :</p>
            <ul>
                {ingredSummary}
            </ul>
            <p><strong> Total Price :  {props.price} </strong></p>
            <p style={{textAlign:'center'}}>Continue to checkout</p>
            <div style={{ display: 'flex',justifyContent: 'center'}}>
                <Button btnType='Danger' clicked={props.purchaseCanceled}>Cancel</Button>
                <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
            </div>
        </div>

        </Aux>            
    );
}

export default OrderSummary;
