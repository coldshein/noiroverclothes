import React from "react";
import styles from "./ProductList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductItem from "../ProductItem/ProductItem";
import { fetchAllProducts } from "../../store/productSlice";
import { Link } from "react-router-dom";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import SideBar from "../SideBar/SideBar";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAllProducts() as any);
  }, []);
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
