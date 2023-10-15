import styles from "./Burger.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setOpenCart } from "../../store/cartSlice";
const Burger = () => {
  const dispatch = useDispatch();
  const openBurger = useSelector((state: RootState) => state.burger.openBurger);
  const openCart = useSelector((state: RootState) => state.cart.openCart);
  return (
    <div className={`${styles.modal} ${openBurger ? styles.active : ""}`}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/collection/men">man</Link>
          </li>
          <li>
            <Link to="/collection/women">woman</Link>
          </li>
          <li>
            <Link to="/designers">designers</Link>
          </li>
          <li>search</li>
          <li onClick={() => dispatch(setOpenCart(openCart))}>cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Burger;
