import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliar'
import Burger from '../../Components/Burger/Burger'
import BuildControls from './../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal';
import Order from '../../Components/Burger/OrderSummary/OrderSummary';
const INGRED_PRICE={
    salad:0.5,
    cheese:0.4,
    meat:0.3,
    bacon:0.6,
}

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0, 
            meat:0
        },
        totalprice:4,
        purchaseable:false,
        purchasing:false
    }

    updatePurchaseState(ingredients){
        const sum=Object.keys(ingredients).map(igkeys=>{
            return ingredients[igkeys]
        }).reduce((sum,el)=>{
            return sum + el
        } , 0 )

        this.setState({purchaseable:sum > 0})
    }

    addingredeienthandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updateCount=oldCount+1;
        const updatedIngred = {
            ...this.state.ingredients
        }
        console.log("updatedIngred",updatedIngred)
        updatedIngred[type] = updateCount;
        const Addprice = INGRED_PRICE[type]
        const oldPrice = this.state.totalprice;
        const newPrice = Addprice +  oldPrice;
        this.setState({
            totalprice:newPrice,
            ingredients:updatedIngred
        })
        this.updatePurchaseState(updatedIngred);
    }
    removeingredeienthandler = (type) =>{
        const oldCount=this.state.ingredients[type];
        if (oldCount<=0) {
            return
        }
        const updateCount=oldCount - 1;
        const updatedIngred = {
            ...this.state.ingredients
        }
        updatedIngred[type] = updateCount;
        const deductprice = INGRED_PRICE[type]
        const oldPrice = this.state.totalprice;
        const newPrice = oldPrice -  deductprice;
        this.setState({
            totalprice:newPrice,
            ingredients:updatedIngred
        })
        this.updatePurchaseState(updatedIngred);
    }


    //puchaseHandler to enable disable the order noe button to show summary
    puchaseHandler = () => {
        this.setState({purchasing:true})
    }   


    purchaseCancelHandler=()=>{
        this.setState({purchasing:false})
    }

    purchaseContinueHandler=()=>{
        alert('You Continue')
    }
    render() {
        const disableinfo = {
            ...this.state.ingredients
        }

        for (const key in disableinfo) {
            disableinfo[key] = disableinfo[key] <= 0
        }
        return (
            <Aux>
                <Modal 
                    show = {this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}  >
                    <Order  
                        ingredients={this.state.ingredients}
                        purchaseCanceled = {this.purchaseCancelHandler}
                        purchaseContinued ={ this.purchaseContinueHandler}
                        price={this.state.totalprice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} /> 
                <BuildControls 
                    addingredeienthandler={this.addingredeienthandler}
                    removeingredeienthandler={this.removeingredeienthandler}
                    disabled = {disableinfo}
                    price={this.state.totalprice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.puchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
