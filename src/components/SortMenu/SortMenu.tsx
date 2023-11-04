import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SortMenu.module.scss";
import { RootState } from "../../store/store";
import { setActiveSort, setOpenSort } from "../../store/menuSlice";
type SortItem = {
  name: string;
  sortProp: string;
};

export const list: SortItem[] = [
  { name: "Latest arrivals", sortProp: "tatest" },
  { name: "Trending", sortProp: "-trending" },
  { name: "Price: Low to high", sortProp: "price" },
  { name: "Price: High to low", sortProp: "-price" },
];
const SortMenu = () => {
  const openSort = useSelector(
    (state: RootState) => state.rootReducer.menu.openSort
  );
  const dispatch = useDispatch();
  const handleSort = (el:string) => {
    dispatch(setActiveSort(el));
    dispatch(setOpenSort(false))
  }
  React.useEffect(() => {
    return () => {
      dispatch(setOpenSort(false));
    };
  }, []);
  return (
    <div className={`${styles.sort} ${openSort ? styles.active : null}`}>
        <div className={styles.close} onClick={() => dispatch(setOpenSort(false))}>Close</div>
      <div className={styles.inner}>
        <div className={styles.list}>
          <ul>
            {list.map((item, index) => (
              <li key={index + item.name} onClick={() => handleSort(item.name)}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortMenu;
