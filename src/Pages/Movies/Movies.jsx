
import {useState} from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {searchFilm} from '../../apiService';
import s from './Movies.module.css';

const Movies = () => {

    const [q, setQ] = useState('')
    const [movies, setMovies] = useState([])

    const navigate = useNavigate();
    const location = useLocation();

    const handleQueryChange = (e) =>{
        setQ(e.currentTarget.value.toLowerCase())
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (q.trim() === ""){
            alert("Введите поисковой запрос")
            setQ('')
        }
        
        searchFilm(q)
        .then(response=>setMovies(response.results))
        .catch(err => console.log(err));

        navigate(`?q=${q}`, {
            state: location.state,
          });
    }



    return (
       <>
        <form onSubmit={handleSubmit} className={s.form}>
            <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies..."
                name="q"
                value={q} 
                onChange = {handleQueryChange}
                className={s.input}
                />
            <button type='submit'>Search</button>    
        </form>
        {q !== "" && 
        <ul className={s.gallery}>
        {movies.map(movie=>(
            <li
            key ={movie.id} className={s.li}>
                <Link className={s.link} to={`/movies/${movie.id}`}><h2>{movie.title}</h2></Link>
            </li>
        ))}
            
    </ul>}
        </>

        
    )
}

export default Movies