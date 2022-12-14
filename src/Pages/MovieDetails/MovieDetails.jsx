import { Suspense, useEffect, useState } from 'react';
import {useParams, NavLink, Outlet, useLocation, Link} from 'react-router-dom';
import {getOneFilm} from '../../apiService';
import s from './MovieDetails.module.css';



const MovieDetails = () => {
    const [movies, setMovies] = useState({})

    const location = useLocation();
    

    const {movieId} = useParams()


    useEffect(()=>{
        getOneFilm(movieId)
        .then(response => setMovies(response))
        .catch(err => console.log(err));
    }, [movieId])

//    console.log(location);
       
    return (
       <>
        <Link to={location.state ?? '/'} className={s.back} state={location}>
            Go back
          </Link>
        <div className={s.container}>
        <img className={s.img} src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} />
       <div className={s.wrapper}>
       <h2 className={s.title}>{movies.title}</h2>
        <p className={s.overview}>{movies.overview}</p>
        <p className={s.relise}>Realise Date: <span className={s.span}>{movies.release_date}</span></p>
        <div className={s.thumb}>
        <p className={s.genresTitle}>Genres:</p>   
        <ul className={s.genres}>
            {movies.genres && movies.genres.map(genre => (
                <li key={genre.id} className={s.genre}> {genre.name}</li>
                    ))}
        </ul>
        </div>
        
        
       </div>
       </div>
       <div className={s.nav}>
        <NavLink className={s.link} state={location.state} to="cast" >Cast</NavLink>
        <NavLink className={s.link} state={location.state} to="reviews" >Reviews</NavLink>
        
        </div>
        <Suspense>
          <Outlet />
        </Suspense>
        
        
        </>
    )
}

export default MovieDetails