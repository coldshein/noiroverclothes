import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setOpenCart } from "../../store/cartSlice";
import { setOpenBurger } from "../../store/burgerSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const openCart = useSelector((state: RootState) => state.cart.openCart);
  const openBurger = useSelector((state: RootState) => state.burger.openBurger);
  const handleBurger = () => {
    dispatch(setOpenBurger(!openBurger));
  };
  return (
    <header>
      <div className={styles.inner}>
        <div
          className={`${styles.burger} ${openBurger ? styles.active : ""}`}
          onClick={handleBurger}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="">men</a>
            </li>
            <li>
              <a href="">women</a>
            </li>
            <li>
              <a href="">designers</a>
            </li>
          </ul>
        </nav>
        <Link to="/products" className={styles.logo}>
          noiroverclothes
        </Link>
        <nav>
          <ul>
            <li>search</li>
            <li onClick={() => dispatch(setOpenCart(openCart))}>cart</li>
          </ul>
        </nav>

        <div className={styles.cart} onClick={() => dispatch(setOpenCart(openCart))}>
          <img src="./assets/cart.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
