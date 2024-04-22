import { useSelector } from "react-redux";
 import Product from "./Product";

const BasketProducts = () => {
    const {products,total,amount} = useSelector((Store)=>Store.basket);
     return(
        <div>
         {amount > 1 ? (<>
            <div>
            {products.map((item,i)=>
            <Product 
               key = {new Date().getTime + Math.random()}
               name={item.name}
               price={item.price}
               image={item.image}
               amount={item.amount}
            
            />
        
        )}
        </div>
        <div className="amount">
         <p>Total</p>
         <p>$ {total.toFixed(2)}</p>
        </div>
        
         </>
         ) : (
         <>
           <p className="p">Your Cart Items are Empty...</p>
         </>)}
      </div>   
   )
}
 
export default BasketProducts;