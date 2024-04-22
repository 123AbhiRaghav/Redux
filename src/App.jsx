
import { useDispatch, useSelector } from 'react-redux';
import BasketProducts from './Components/BasketProduct';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';
import { updateTotal } from './Features/BasketSlice';

function App() {
  const {products} = useSelector((Store) => Store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal())
  },[products,dispatch])
  
  return (
    <>
        <Navbar />
       <h2 className='header'>Shopping Cart</h2>
    <BasketProducts />
    </>
  )
}
export default App;