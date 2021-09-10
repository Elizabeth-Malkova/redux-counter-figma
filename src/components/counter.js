import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button } from 'reactstrap';

//import {bindActionCreators} from 'redux'

const Counter = ({counter,inc,dec,rnd})=>{
    return(
        <div className ="jumbotron">
            <h1 id="counter" className ="counter">{counter}</h1>
            <div className="button-container">
                <Button onClick ={inc} color="success" className = "btn btn-plus">+</Button>
                <Button onClick ={dec} color="warning" className ='btn btn-minus'>-</Button>
                <Button onClick ={rnd} color="danger" className ='btn btn-update'>&#10558;</Button>
            </div>
        </div>
    );
}
const mapStateToProps = (state) =>{
    return {
        counter: state
    }
}
/*const mapDispatchToProps = (dispatch) =>{
   return bindActionCreators (actions,dispatch) //инк.дес и рнд -это обвернутые в диспетч функции
}*/

export default connect(mapStateToProps,actions)(Counter);