import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './SideBar.module.scss'
import { RootState } from '../../store/store';
import { fetchAllCategories, fetchAllDesigners } from '../../store/productSlice';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const dispatch = useDispatch();
    const {categories, designers} = useSelector((state:RootState) => state.products)
    React.useEffect(() =>{
        dispatch(fetchAllCategories() as any)
        dispatch(fetchAllDesigners() as any)
    },[])
    const sortedItems = [...designers.items].sort((a, b) => a.localeCompare(b));
    
    return ( 
        <div className={styles.sidebar}>
            <h5 className={styles.title}>all categories</h5>
            <ul>
              {categories.items.map((item) => <li key={item}><Link to={`/categories/${item}`}>{item}</Link> </li>)}
            </ul>
            <h5 className={styles.title}>all designers</h5>
            <ul>
               {
                sortedItems.map((item) => <li key={item}><Link to={`/designers/${item}`}>{item}</Link></li> )
               }
            </ul>
        </div>
     );
}
 
export default SideBar;