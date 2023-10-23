import styles from './EmptyCart.module.scss'
const EmptyCart = () => {
    return ( 
        <div className={styles.empty}>
            Your cart is empty... <br></br>Go add some items in there.
        </div>
     );
}
 
export default EmptyCart;