import axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import styles from './Detail.module.css'

function Detail(){
    // const API_KEY = 'henrym-domenicoph'
    const URL_BASE = 'http://localhost:3001/rickandmorty/character/'

    const { id } = useParams()
    // console.log(id);

    const [characterDetail, setCharacterDetail] = useState({})

    useEffect(()=>{
        axios(`${URL_BASE}${id}`)
        .then(({data})=>{
            setCharacterDetail(data)
        })
        .catch(err => console.log(err.response.data.error))

        return setCharacterDetail({})
    },[id])



    return (
        <div className={styles.container}>

            <h1 className={styles.nombre}>{characterDetail.name}</h1>

            <div className={styles.subContainer}>
                
                <img className={styles.image} src={characterDetail.image} alt={characterDetail.name} />
                
                <div className={styles.info}>
                    <p><span className={styles.inGreen}>Id:</span> {characterDetail.id}</p>
                    <p><span className={styles.inGreen}>Specie:</span> {characterDetail.species}</p>
                    <p><span className={styles.inGreen}>Gender:</span> {characterDetail.gender}</p>
                    <p><span className={styles.inGreen}>Type: </span> {characterDetail.type}</p>
                    <p><span className={styles.inGreen}>Status:</span> {characterDetail.status}</p>
                    {characterDetail.origin && <p><span className={styles.inGreen}>Origin:</span> {characterDetail.origin.name}</p>}
                    {characterDetail.location && <p><span className={styles.inGreen}>Location:</span> {characterDetail.location.name}</p>}
                </div>

            </div>
            
            <Link className={styles.center} to='/home'>
                <button className={styles.goback}>Go back</button>
            </Link>

        </div>
    )
}

export default Detail;