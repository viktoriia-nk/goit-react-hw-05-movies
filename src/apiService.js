import axios from 'axios';

const API_KEY = '53540339dd7e56b42abfb648d96f315b'


export const getTrending = async () => {
  try{
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)

    return response.data;
  }
  catch (error) {
    alert(error)
  }
};


export const getOneFilm = async (movieId) => {
  try{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } 
  catch (error) {
    alert (error)
  }
}


export const getCastActors = async (movieId) => {
  try{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    // console.log(response.data);
    return response.data
  }
  catch (error) {
    alert (error)
  }
}

export const getReviews = async (movieId) => {
  try{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
    // console.log(response.data);
    return response.data
  }
  catch (error) {
    alert (error)
  }
}

export const searchFilm = async (query) => {
  const response =  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
  return response.data
}


export  const getGenres = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  return response.data.genres;
}



