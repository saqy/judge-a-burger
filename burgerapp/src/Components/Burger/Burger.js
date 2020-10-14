import React from 'react';
import Styles from './Burger.module.css'
import BurgerIncredients from './BurgerIncredients/BurgerIncredients';

const Burger = (props) => {
    let ingred = Object.keys(props.ingredients).map(
        ingkey=>{   //basically we recieved  a object so to apply map we have to convert it into array so we can apply a map method on it.
            return [...Array(props.ingredients[ingkey])]     //[] extract keys to an array
                .map(( _  , index )=>{
                    return <BurgerIncredients key={ ingkey + index } type = { ingkey} /> ;
                })
            }).reduce(
                (arr,el)=>{
                    return arr.concat(el)
                },[])
    if(ingred.length === 0){
        ingred=<p> Please Add Ingredients</p>
    }
    console.log(ingred)
    return (
        <div className={Styles.Burger}>
        <BurgerIncredients type='bread-top' />           
            {ingred}        
        <BurgerIncredients type='bread-bottom' />           
        </div>
    );
}

export default Burger;
