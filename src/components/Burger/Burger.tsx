import styles from "./Burger.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Burger = () => {

  const openBurger = useSelector((state: RootState) => state.rootReducer.menu.openBurger);
  return (
    <div className={`${styles.modal} ${openBurger ? styles.active : ""}`}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/products/men">man</Link>
          </li>
          <li>
            <Link to="/products/women">woman</Link>
          </li>
          <li>
            <Link to="/designers">designers</Link>
          </li>
          <li>search</li>
        </ul>
      </nav>
    </div>
  );
};

export default Burger;
