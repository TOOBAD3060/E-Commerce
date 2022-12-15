import { products } from "../ProductPage/product-data"
const content = []
const reducer = (state, action) => {
    if(action.type === "CLEAR_CART"){
    return {...state,cart:[]}
    }

    if(action.type === "REMOVE"){
        
        const newState = state.cart.filter((item)=> item.id !== action.payload )
        return {...state,cart:newState}
        }

     if(action.type === "INCREASE"){
        let tempCart = state.cart.map((product)=>{
            if (product.id === action.payload) {
                return {...product, amount : product.amount + 1}
            }
            return product
        })
        return {...state,cart:tempCart}
     }    

  if(action.type === "DECREASE"){
        let tempCart = state.cart.map((product)=>{
            if (product.id === action.payload) {
                 return {...product, amount: product.amount - 1}
                } 
            return product
        })
        .filter((product)=> product.amount !== 0 )
        return {...state,cart:tempCart}
     }  

     if(action.type === "GET_TOTALS"){
        let {total,amount} = state.cart.reduce(
            (cartTotal,cartItem) => {
                const {price,amount} = cartItem;
                const itemTotal = price * amount;
                cartTotal.total += itemTotal;
                cartTotal.amount += amount;

                return cartTotal;
            },
            {
                total:0,
                amount:0
            }
        )
        total = parseFloat(total.toFixed(2))
        return {...state,total,amount}
     }

     if(action.type === "ADD_ITEM"){
        const addedItem = products.find((item)=> item.id === action.payload )
        
        content.push(addedItem)
        return {...state,cart: [...content]}
        //  console.log(5555555)
        //  return{...state}
     }
        
}

export default reducer;