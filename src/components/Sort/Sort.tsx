import styles from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setOpenSort } from "../../store/menuSlice";

const Sort = () => {
  const {openSort, activeSort} = useSelector((state:RootState) => state.rootReducer.menu)
  const dispatch = useDispatch();
  

  return (
    <div className={styles.sort} >
      <div className={styles.inner}>
        <div className={styles.title} onClick={() => dispatch(setOpenSort(!openSort))}>
          <img src="/assets/sort.svg" alt="" /> 
          <div className={styles.activeOption}>{activeSort === '' ? 'Newest' : activeSort}</div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
