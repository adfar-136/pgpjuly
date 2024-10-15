const colorReducer =(state ={backgroundColor:"blue"},action)=>{
   if(action.type ===  'SET_BACKGROUND_COLOR'){
    return {backgroundColor:action.payload}
   }
   return state
}
export default colorReducer