const initialState = {
	balance: 300000
    
};

const Reducer = (state = initialState, action) => {
    const newState = {...state};
 
  //receiving and using a payload
    switch (action.type) {
        
         case"withdraw":
      return { 
        ...state,
        balance: state.balance - action.value,
      };
      break;
      case"deposit":
          return{
          ...state,
          balance:state.balance + action.value,
          }
          break;
   }
   return newState
  }
  
  export default Reducer;