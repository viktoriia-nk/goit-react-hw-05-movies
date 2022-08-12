import { useState, useEffect } from 'react';
import {getReviews} from '../../apiService';
import {useParams} from 'react-router-dom';
import s from './Reviews.module.css';

const Reviews =() =>{

    const [reviews, setReviews] = useState([])

    const {movieId} = useParams()

    useEffect(()=>{
        getReviews(movieId)
        .then(response=> setReviews(response.results))
        .catch(err => console.log(err));
    },[movieId])

    console.log(reviews);

    return (
        <>
        {reviews.length !==0 &&
        <ul className={s.gallery}>
            {reviews.map(rev=>(<li key={rev.id} className={s.item}>
                <h3 className={s.name}>{rev.author}</h3>
                <p className={s.text}>{rev.content}</p>
            </li>))}
        </ul>}
        {reviews.length === 0 && <h3 className={s.noRev}>Sorry, but there are no reviews for this movie!</h3>}
      
        </>
    )

}

export default Reviews