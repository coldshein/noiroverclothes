import React from 'react'
import styles from './ProductItem.module.scss'

type productItemState = {
    title: string,
    price: string,
    imageUrl: string[]
}

const ProductItem:React.FC<productItemState> = ({title, price, imageUrl}) => {
    if(!imageUrl){
        return <h1>...</h1>
    }
    return ( 
        <div className={styles.productItem}>
            <div className={styles.img}>
                <img src={imageUrl[0]} alt="" />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}.00$</div>
        </div>
     );
}
 
export default ProductItem;