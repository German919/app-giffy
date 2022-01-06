import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import GetTredingTerms from '../../services/getTredingTerms';
import styles from "./index.module.css";

export const Categories = () => {

    const [tendencias, setTendencias] = useState([]);

    useEffect(() => {
        GetTredingTerms().then( ({data}) => setTendencias(data))
    },[]);
    
    return (
        <div className={styles.container} >
            <h2>Tendencias</h2>
            <ul className={styles.containerList}>
                {
                    tendencias?.map( op => (
                        <li key={op.id}> 
                            <NavLink className={({isActive})=>  (isActive ? 
                                styles.active : styles.list) } to={`/${op.username}`}>
                                {op.username}</NavLink></li>
                    ))
                }
            </ul>
        </div>
    )
}
