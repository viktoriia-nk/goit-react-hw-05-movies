import {Link, useLocation} from 'react-router-dom';
import s from '../Movies/Movies.module.css';

const RenderSearch = ( {movies}) => {
    

    const location = useLocation();

    return(
        <>
        
        <ul className={s.gallery}>
        {movies.map(movie=>(
            <li
            key ={movie.id} className={s.li}>
                <Link className={s.link} to={`/movies/${movie.id}`} state={location}><h2>{movie.title}</h2></Link>
            </li>
        ))}
            
    </ul>
    </>
    )
}

export default RenderSearch