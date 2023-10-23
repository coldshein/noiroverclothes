import styles from './Filter.module.scss'
const Filter = () => {
    return ( 
        <div className={styles.filter}>
            <div className={styles.title}><img src="/assets/filter.svg" alt="" />Filter</div>
        </div>
     );
}
 
export default Filter;