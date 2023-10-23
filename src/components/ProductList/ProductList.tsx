import React from "react";
import styles from "./ProductList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductItem from "../ProductItem/ProductItem";
import { fetchAllProducts, fetchProductsBySex } from "../../store/productSlice";
import { Link, useParams } from "react-router-dom";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import SideBar from "../SideBar/SideBar";

export type ParamsType = {
  sex: string,
}

const ProductList = () => {
  const {sex} = useParams<ParamsType>();
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if(sex){
      dispatch(fetchProductsBySex(sex) as any)
    } else {
      dispatch(fetchAllProducts() as any);
    }
    
  }, [sex]);
  return (
    <section className={styles.productList}>
      <div className={styles.inner}>
        <SideBar />
        <div className={styles.block}>
          <div className={styles.options}>
            <Sort />
            <Filter />
          </div>
          <div className={styles.list}>
            {products.map((item) => (
              <Link to={`/product/${item.link}/${item.id}`} key={item.id}>
                <ProductItem
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
