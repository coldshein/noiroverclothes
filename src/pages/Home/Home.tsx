import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      exit={{ opacity: 0, transition: { duration: 0.7 } }}
    >
      <div className={styles.inner}>
        <Link to="/products" className={styles.all}>
          <h2 className={styles.title}>view all</h2>
        </Link>
        <Link to="/products/women" className={styles.block}>
          <div className={styles.img}>
            <img src="/assets/women.webp" alt="" />
          </div>
          <h2 className={styles.title}>womenswear</h2>
        </Link>
        <Link to="/products/men" className={styles.block}>
          <div className={styles.img}>
            <img src="/assets/men.webp" alt="" />
          </div>
          <h2 className={styles.title}>menswear</h2>
        </Link>
      </div>
    </motion.main>
  );
};

export default Home;
