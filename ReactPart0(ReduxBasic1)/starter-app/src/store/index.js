import { createStore } from "redux";

const initial ={
    count:0,
    isOn:false,
    toggle:true
}
const timerReducer = (state, action)=>{
if(action.type === "start"){
    return {...state, count:state.count+1}
}else if(action.type === "isOn"){
    return {...state, isOn:!state.isOn}
}else if(action.type === "toggle"){
    return {...state, toggle:!state.toggle}
}else{
    return state
}
}

const store = createStore(timerReducer, initial)

export default store;