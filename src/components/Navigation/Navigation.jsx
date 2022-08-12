import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

 const Navigation = () => {

    return(
        <header className={s.header}>
        <nav className={s.nav}>
         <NavLink className={s.link} to="/" >Home</NavLink> 
         <NavLink className={s.link} to="/movies" >Movies</NavLink>  
        </nav>
        </header>
    )
}

export default Navigation;