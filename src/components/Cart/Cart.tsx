import React from 'react'
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchCartItems, setOpenCart } from "../../store/cartSlice";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
    const {openCart,items} = useSelector((state: RootState) => state.cart)

    React.useEffect(() => {
      dispatch(fetchCartItems() as any)
    },[])
  return (
    <div className={`${styles.cart} ${openCart && styles.active}`}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Your cart</h2>
        <div className={styles.close} onClick={() => dispatch(setOpenCart(openCart))}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.list}>
       {
        items.map((item) => <CartItem
        key={item.id} title={item.title} price={item.price} size={item.size}
        imageUrl={item.imageUrl} id={item.id}/> )
       }
      </div>
      <button className={styles.btn}>checkout
      </button>
    </div>
  );
};

export default Cart;
