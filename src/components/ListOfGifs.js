import React, {useEffect, useState} from 'react'
import GetGifs from '../services/getGifs';
import Gif  from './gif/Index'
import {useParams} from "react-router-dom";
import styles from "./listOfGifs.module.css";

export const ListOfGifs = () => {

    const {keyword} = useParams()

    const [gifs, setGifs] = useState([]);
    const [page, setPage] = useState(0)

    useEffect(() => {
        GetGifs({keyword, page}).then(data => setGifs(data));
        
    },[keyword, page]);

    const handleIncrePage = () => {
        setPage((prevPage) => prevPage + 1);
    }

    const handleDecrePage = () => {
        setPage((prevPage) =>  prevPage > 0 ? prevPage - 1 : null);
    }

    return (
        <>
        <div className={styles.containerBtn}>
            <button 
                className={styles.button}
                onClick={handleDecrePage}
                >
                prev page</button>
            <button 
                className={styles.button}
                onClick={handleIncrePage}
                >
                next page</button>
        </div>
       
        <div className={styles.container}>
        
        {
            gifs?.map( ({title, id, url}) => (
                <Gif 
                    key={id} 
                    title={title} 
                    url={url}/>
            ))
        }
        
        </div>  
        </> 
    )
}
