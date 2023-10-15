import React from "react";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setOpenCart } from "../../store/cartSlice";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const openCart = useSelector((state: RootState) => state.cart.openCart)
    const dispatch = useDispatch();
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
        <CartItem/>
      </div>
    </div>
  );
};

export default Cart;
