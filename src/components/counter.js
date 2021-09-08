import React from 'react'

const Counter = ({counter,inc,dec,rnd})=>{
    return(
        <div id="root" class="jumbotron">
            <h1 id="counter">{counter}</h1>
            <button onClick ={dec} className = "btn btn-minus">-</button>
            <button onClick ={inc} className = "btn btn-plus">+</button>
            <button onClick ={rnd} className = "btn btn-update">RND</button>
        </div>
    );
}
export default Counter;