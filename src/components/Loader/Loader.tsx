import styles from './Loader.module.scss'
const Loader = () => {
    return ( 
        <div className={styles.loader}>
            <img src="/assets/preload.gif" alt="" />
        </div>
     );
}
 
export default Loader;