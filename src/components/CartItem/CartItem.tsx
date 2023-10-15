import React from "react";
import styles from "./CartItem.module.scss";
const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.img}></div>
      <div className={styles.info}>
        <div className={styles.title}>Lorem ipsum dolor sit.</div>
        <div className={styles.size}>size: 39</div>
        <div className={styles.price}>130.00$</div>
      </div>
      <div className={styles.remove}>
        <img src="./public/assets/remove.svg" alt="" />
      </div>
    </div>
  );
};

export default CartItem;
