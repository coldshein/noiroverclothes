import React from 'react'
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setOpenCart } from '../../store/cartSlice';
import { setOpenBurger } from '../../store/burgerSlice';
const Header = () => {
    const dispatch = useDispatch();
    const openCart = useSelector((state: RootState) => state.cart.openCart)
    const openBurger = useSelector((state: RootState) => state.burger.openBurger)
    const handleBurger = () => {
        dispatch(setOpenBurger(!openBurger));
      };
    return ( 
        <header>
            <div className={styles.inner}>
                <nav>
                    <ul>
                        <li><a href="">men</a></li>
                        <li><a href="">women</a></li>
                        <li><a href="">designers</a></li>
                    </ul>
                </nav>
                <div className={styles.logo}>noiroverclothes</div>
                <nav>
                    <ul>
                        <li>search</li>
                        <li onClick={() => dispatch(setOpenCart(openCart))}>cart</li>
                    </ul>
                </nav>
                <div className={`${styles.burger} ${openBurger ? styles.active : ''}` } onClick={handleBurger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;