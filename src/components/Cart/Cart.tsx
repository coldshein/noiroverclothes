import React from "react";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchCartItems, setOpenCart } from "../../store/cartSlice";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "../EmptyCart/EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const { openCart, items } = useSelector((state: RootState) => state.rootReducer.cart);
  const totalPrice = items.reduce((sum, item) => Number(sum) + Number(item.price), 0 )

  React.useEffect(() => {
    dispatch(fetchCartItems() as any);
  }, []);
  return (
    <div className={`${styles.cart} ${openCart && styles.active}`}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Your cart</h2>
        <div
          className={styles.close}
          onClick={() => dispatch(setOpenCart(openCart))}
        >
          <div></div>
          <div></div>
        </div>
      </div>
      {items.length ? (
        <>
          <div className={styles.list}>
            {items.map((item) => (
              <CartItem
                key={item.id + item.title}
                title={item.title}
                price={item.price}
                size={item.size}
                imageUrl={item.imageUrl}
                id={item.id}
              />
            ))}
          </div>
          <div className={styles.info}>
            <span className={styles.total}>Total: {Number(totalPrice)}.00$</span>
          <button className={styles.btn}>checkout</button>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
