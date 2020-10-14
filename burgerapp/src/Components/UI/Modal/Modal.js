import React, { Component } from 'react';
import Styles from './Modal.module.css'
import Aux from '../../../hoc/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
    constructor(props){
        super()
    }

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show!==this.props.show;
    }

    componentWillUpdate(){
        console.log('Modal Will Update')
    }
    render(){
        return (
            <Aux>            
                <Backdrop shows = {this.props.show} clicked={this.props.modalClosed} />
                <div className={Styles.Modal} 
                    style={{
                        transform : this.props.show ? 'translateY(0)' :'translatey(-100vh)',
                        opacity : this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }

}

export default Modal;
