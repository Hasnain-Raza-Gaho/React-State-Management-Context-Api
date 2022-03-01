const  AppReducer = (state,action)=>{
    console.log(state,action)
    switch(action.type){
        case "Counter_INC":
            return{
                ...state,
                count : state.count+1
            }
        case "Counter_Dec":
            return{
                ...state,
                count : state.count-1
            }
        case "Counter_Reset":
            return{
                ...state,
                count : state.count*0
            }
        default:
            return state


    }
    // switch()
}
export default AppReducer