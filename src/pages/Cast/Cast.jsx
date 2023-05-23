import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'fetch/fetch';
import s from './cast.module.css'

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

export default function Cast (){
    const { moviesId } = useParams();
    const [cast, setCast] = useState();

    useEffect(() => {
        API.fetchMovieCast(moviesId).then(data => {
            setCast(data.cast)
        })
    }, [moviesId])
 

    return (
        <>
        {cast && (
                <ul className={s.list}>
                {cast.map(actor => (
                    <li key={actor.id} className={s.item}> 
                        <img className={s.img} src={
                            actor.profile_path
                            ? `https://image.tmdb.org/t/p/w342${actor.profile_path}`
                            : defaultImg
                        }
                            alt='poster'
                            width={250}
                        />
                        <h3>{actor.name}</h3>
                        <h4>Character: {actor.character}</h4>
                    </li>
                ))}
            </ul>
        )}
        
        </>

    )
}