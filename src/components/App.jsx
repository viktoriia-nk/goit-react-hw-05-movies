import {Route, Routes} from 'react-router-dom';
import { lazy, Suspense } from "react";

const Home = lazy(()=> import('./Home/Home'))
const Navigation = lazy(()=> import('./Navigation/Navigation'))
const MovieDetails = lazy(()=> import('./MovieDetails/MovieDetails'))
const Cast = lazy(()=> import('./Cast/Cast'))
const Reviews = lazy(()=> import('./Reviews/Reviews'))
const Movies = lazy(()=> import('./Movies/Movies'))


export const App = () => {

  return (
   <>
<Suspense fallback={<h1>Loading...</h1>}>
<Navigation />
   <Routes>

   <Route  path="/" exact element = {<Home />}>
   </Route>

   <Route  path="/movies" exact element = {<Movies />}>
   </Route>

    <Route  path='/movies/:movieId' exact element = {<MovieDetails />}>

    <Route path="cast" element = {<Cast />} />
    <Route path="reviews" element = {<Reviews />} />
    
    </Route>


   </Routes>
</Suspense>
   </>
  );
};
