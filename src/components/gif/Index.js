import React from 'react'
import styles from './index.module.css';

const Gif = ({title, url}) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <img className={styles.imagen} src={url} alt="gif" />
        </div>
    )
}

export default Gif
