import { useState, useEffect } from 'react';
import propTypes from 'prop-types'; 
import { Link, useLocation } from 'react-router-dom';
import API from 'fetch/fetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'utils/Spinner/Spinner';
import s from './listMovies.module.css'

export default function ListMovies({ search }) {
    const [movies, setMovies] = useState();
    const [spinner, setSpinner] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (!search) {
            return;
        }
        setSpinner(true);
        API.fetchSearchMovie(search)
            .then(data => {
                if (data.results.length === 0) {
                    toast.error('Русский корабль, иди на#уй', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                setMovies(data.results)
            }).finally(() => { setSpinner(false) })
    }, [search]);

    return (
        <>
            {spinner && <Spinner />}
            {movies && (
                <ol className={s.list}>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${movie.id}`} state={{ from: location, label: 'Go to Search' }}>{movie.title}</Link>
                        </li>
                    ))}
                </ol>
            )}
            <ToastContainer />
        </>
    );
}

ListMovies.propTypes = {
  search: propTypes.string,
};