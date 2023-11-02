import React from "react";
import styles from "./Designers.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchAllDesigners } from "../../store/productSlice";

const Designers = () => {
  const dispatch = useDispatch();
  const designers = useSelector((state: RootState) => state.rootReducer.products.designers);
  React.useEffect(() => {
    dispatch(fetchAllDesigners() as any);
  }, []);
  const sortedItems = [...designers.items].sort((a, b) => a.localeCompare(b));

  return (
    <section className={styles.designers}>
      <div className={styles.inner}>
        <div className={styles.list}>
          <ul>
            {designers.loading === "loading"
              ? Array(10)
                  .fill(null)
                  .map(() => (
                   <>loading..</>
                  ))
              : sortedItems.map((item) => (
                  <li key={item}>
                    <Link to={`/designers/${item}`}>{item}</Link>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Designers;
