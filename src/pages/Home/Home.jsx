import { useState, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import API from 'fetch/fetch';
import MovieHeading from 'components/MovieHeading/MovieHeading';
import s from './home.module.css'

export default function Home() {
    const [trendingMovies, setTrendingMovies] = useState([])
    const location = useLocation()

    useEffect(() => {
        API.fetchTrendingMovies().then(response => setTrendingMovies(response.results))
    }, [])
    return (
        <>
        <MovieHeading text='Trending today'/>
        {trendingMovies && (
            <ol className={s.list}>
                {trendingMovies.map(movie => (<li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location, label: 'Go to Home' }}>{movie.title}</Link>
                    </li>))}
            </ol>
        )}
        </>
    )
}