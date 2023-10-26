import styles from './Loader.module.scss'
const Loader = () => {
    return ( 
        <div className={styles.loader}>
            <img src="/public/assets/preload.gif" alt="" />
        </div>
     );
}
 
export default Loader;