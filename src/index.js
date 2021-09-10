import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';


const store = createStore(reducer)
/*const bindActionCreator=(creator,dispatch)=>(...args)=>{
  dispatch(creator(...args))
}*/
//и сразу диструктурируем наши функции
//const {inc,dec,rnd} = bindActionCreators(actions,dispatch) //инк.дес и рнд -это обвернутые в диспетч функции

  ReactDOM.render(
    <Provider store = {store}>
  <App/>
  </Provider>
  ,document.getElementById('root'));


  