import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './SideBar.module.scss'
import { RootState } from '../../store/store';
import { fetchAllCategories, fetchAllDesigners } from '../../store/productSlice';

const SideBar = () => {
    const dispatch = useDispatch();
    const {categories, designers} = useSelector((state:RootState) => state.products)
    React.useEffect(() =>{
        dispatch(fetchAllCategories() as any)
        dispatch(fetchAllDesigners() as any)
    },[])

    
    return ( 
        <div className={styles.sidebar}>
            <h5 className={styles.title}>all categories</h5>yar
            <ul>
              {categories.map((item) => <li key={item}>{item}</li> )}
            </ul>
            <h5 className={styles.title}>all designers</h5>
            <ul>
               {
                designers.items.map((item) => <li key={item}>{item}</li> )
               }
            </ul>
        </div>
     );
}
 
export default SideBar;