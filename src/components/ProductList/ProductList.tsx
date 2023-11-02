import React from "react";
import styles from "./ProductList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductItem from "../ProductItem/ProductItem";
import {
  fetchAllProducts,
  fetchProductsByCategories,
  fetchProductsByDesigner,
  fetchProductsBySex,
} from "../../store/productSlice";
import { Link, useParams } from "react-router-dom";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import SideBar from "../SideBar/SideBar";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";

export type ParamsType = {
  sex: string;
  designer: string;
  category: string;
};

const ProductList = () => {
  const { sex, designer, category } = useParams<ParamsType>();
  const products = useSelector((state: RootState) => state.rootReducer.products.products);
  const dispatch = useDispatch<any>();
  React.useEffect(() => {
    if (designer) {
      dispatch(fetchProductsByDesigner(designer));
    } else if (sex) {
      dispatch(fetchProductsBySex(sex));
    } else if (category) {
      dispatch(fetchProductsByCategories(category));
    } else {
      dispatch(fetchAllProducts());
    }
  }, [sex, designer, category]);
  return (
    <motion.section
      className={styles.productList}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      exit={{ opacity: 0, transition: { duration: 0.7 } }}
    >
      <div className={styles.inner}>
        {products.loading === "loading" ? (
          <Loader />
        ) : (
          <>
            <SideBar />
            <div className={styles.block}>
              <div className={styles.options}>
                <Sort />
                <Filter />
              </div>
              <div className={styles.list}>
                {products.items.map((item) => (
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
          </>
        )}
      </div>
    </motion.section>
  );
};

export default ProductList;
