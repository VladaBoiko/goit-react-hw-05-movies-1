import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'fetch/fetch';

export default function Reviews(){
    const { moviesId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        API.fetchMovieReviews(moviesId).then(data => setReviews([...data.results]))
    }, [moviesId])

    if (reviews.length === 0) {
        return <p>We don't have any reviews for this movie</p>;
    }

    return (
        <>
        {reviews && (
            <ul>
                {reviews.map(review => (
                    <li key={review.id} >
                        <h3>Author: {review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        )}
        </>
    )
}