import React from "react";
import styles from "./Sort.module.scss";

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

const Sort = () => {
  const [sort, setSort] = React.useState(false);

  return (
    <div className={styles.sort}>
      <div className={styles.inner}>
        <div className={styles.title} onClick={() => setSort(!sort)}>
          <img src="./assets/sort.svg" alt="" /> Sort by:{" "}
          <div className={styles.activeOption}>Newest</div>
        </div>
      </div>
      {!sort && (
        <div className={styles.sortList}>
          <ul>
            {list.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
