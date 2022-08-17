import {getCastActors} from '../../apiService';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import s from './Cast.module.css';

const Cast = () => {
    const [cast, setCast] = useState([])

    const {movieId} = useParams()

    


    useEffect(()=>{
        getCastActors(movieId)
        .then(response=> setCast(response.cast))
        .catch(err => console.log(err));
    },[movieId])

// console.log(location);
    return (
        
    <div className={s.container}>
        <ul className={s.gallery}>
            {cast.map(actor=>(<li key={actor.id} className={s.item}>
                <img className={s.img} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                <h3 className={s.name}>{actor.name}</h3>
                <h4 className={s.character}>{actor.character}</h4>
            </li>))}
        </ul>
      
    </div>
    )
}

export default Cast