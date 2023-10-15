import React from 'react'
import styles from './ProductList.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ProductItem from '../ProductItem/ProductItem';
import { fetchAllProducts } from '../../store/ProductSlice';

const ProductList = () => {
    const products = useSelector((state: RootState) => state.products.products)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchAllProducts() as any);
    },[])
    console.log(products)
    return ( 
        <section className={styles.productList}>
            <div className={styles.list}>
               {
                products.map((item, index) => <ProductItem
                key={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}/>)
               }
            </div>
        </section>
     );
}
 
export default ProductList;