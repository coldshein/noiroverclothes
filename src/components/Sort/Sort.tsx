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
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.sort} ref={sortRef}>
      <div className={styles.inner}>
        <div className={styles.title} onClick={() => setOpen(!open)}>
          <img src="./assets/sort.svg" alt="" /> Sort by:{" "}
          <div className={styles.activeOption}>Newest</div>
        </div>
      </div>
      {open && (
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
