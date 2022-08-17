import { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import {getTrending} from '../../apiService';
import s from './Home.module.css';

const Home = () => {
    const [movies, setMovies] = useState([])

    const location = useLocation()


    useEffect(() => {
        getTrending()
          .then(response => setMovies(response.results))
          .catch(err => console.log(err));
      }, []);
    //   console.log(movies);
// console.log(location);

    return(
        <div className={s.container}>
        <h1 className={s.title}>Trending Today</h1>
        <ul className={s.gallery}>
        {movies.map(movie=>(
            <li
            key ={movie.id}
            className={s.li}>
                <Link className={s.link} to={`/movies/${movie.id}`} state={location}><h2>{movie.title}</h2></Link>
            </li>
        ))}
            
    </ul>
    </div>
    )
    
}

export default Home