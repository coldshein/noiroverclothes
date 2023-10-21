import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";
import { removeCartItem, removeItem } from "../../store/cartSlice";
interface ICartItem {
  title: string;
  price: number;
  size: string;
  imageUrl: string[],
  id: string,
}
const CartItem:React.FC<ICartItem> = ({title, price, size, imageUrl, id}) => {
  const dispatch = useDispatch();
  
  const onClickRemove = () => {
    dispatch(removeItem(id))
    dispatch(removeCartItem(id) as any)
  }


  return (
    <div className={styles.cartItem}>
      <div className={styles.img}>
        <img src={imageUrl[0]} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.size}>size: {size}</div>
        <div className={styles.price}>{price}.00$</div>
      </div>
      <div className={styles.remove} onClick={onClickRemove}>
        <img src="/assets/remove.svg" alt="" />
      </div>
    </div>
  );
};

export default CartItem;
