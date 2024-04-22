import { useDispatch } from "react-redux";
 import {increseAmount, decreseAmount, removeItem} from '../Features/BasketSlice'

const Product = ({name,price,image,amount}) => {
  const dispatch = useDispatch();
    return (
        <>
        <div className="img">
        <img src={image} alt={name+ "phones"} />
        <div className="name">
          <p>{name}</p>
          <p>{price.toFixed(2)}</p>
          <button onClick={() => {dispatch(removeItem({name}))}}>Remove</button>
        </div>

        <div className="price">
          <p>Amount</p>
          <p className="amt"></p>

          <div className="button">
            <button className="sym"
              onClick={() => {
              if(amount === 1  ) {
                dispatch(removeItem({name}));
                return;
              }
              dispatch(decreseAmount({name}))}}>-</button>
              <p>{amount}</p>
            
            <button className="sym" 
              onClick={() => {dispatch(increseAmount({name}))}}>+</button>
          </div>
        </div>
        </div>
        </>
      );
}
 
export default Product;
