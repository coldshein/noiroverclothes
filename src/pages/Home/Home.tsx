import { Link } from 'react-router-dom';
import styles from './Home.module.scss'
const Home = () => {
    return ( 
        <main className={styles.home}>
            <div className={styles.inner}>
                <Link to='/products/women' className={styles.block}>
                    <div className={styles.img}>
                        <img src="/assets/women.webp" alt="" />
                    </div>
                    <h2 className={styles.title}>womenswear</h2>
                </Link>
                <Link to='/products/men' className={styles.block}>
                    <div className={styles.img}>
                        <img src="/assets/men.webp" alt="" />
                    </div>
                    <h2 className={styles.title}>menswear</h2>
                </Link>
            </div>
        </main>
     );
}
 
export default Home;