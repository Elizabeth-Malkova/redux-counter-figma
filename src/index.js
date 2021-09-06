import {createStore,bindActionCreators} from 'redux';
import reducer from './reducer';
import { inc,dec,rnd } from './actions';

const store = createStore(reducer)
const {dispatch} = store;

/*const bindActionCreator=(creator,dispatch)=>(...args)=>{
  dispatch(creator(...args))
}*/

//и сразу диструктурируем наши функции
const {ingDispatch,decDispatch,rndDispatch} = bindActionCreators({
  ingDispatch:inc,
  decDispatch:dec,
  rndDispatch:rnd
},dispatch)


document.getElementById('inc').addEventListener('click',ingDispatch);

document.getElementById('dec').addEventListener('click',decDispatch);
document.getElementById('rnd').addEventListener('click',()=>{
  const value=Math.floor(Math.random() * 10)
  rndDispatch(value)
});

const update=()=>{
  document.getElementById('counter').textContent=store.getState();
}

store.subscribe(update)