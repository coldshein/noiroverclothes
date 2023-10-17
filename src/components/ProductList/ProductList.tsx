import React from "react";
import styles from "./ProductList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductItem from "../ProductItem/ProductItem";
import { fetchAllProducts } from "../../store/productSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAllProducts() as any);
  }, []);
  return (
    <section className={styles.productList}>
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
    </section>
  );
};

export default ProductList;
