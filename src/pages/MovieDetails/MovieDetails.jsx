import { useState, useEffect, useRef } from "react";
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import API from "fetch/fetch";
import MovieHeading from "components/MovieHeading/MovieHeading";
import s from "./movieDetails.module.css";
import Spinner from "utils/Spinner/Spinner";
import Button from "utils/Button/Button";

const defaultImg =
  "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

export default function MovieDetails() {
  const [movies, setMovies] = useState();
  const moviesId = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backToPrevLinkRef = useRef(location.state?.from ?? "/movies");
  // console.log(movies);
  useEffect(() => {
    console.log(moviesId);
    API.fetchMoviesDetails(moviesId).then((response) => setMovies(response));
  }, [moviesId]);

  const Return = () => {
    navigate(
      location.state?.from?.pathname
        ? `${location.state?.from?.pathname}${location.state?.from?.search}`
        : "/"
    );
  };

  return (
    <>
      {!movies && <Spinner timeout={3000} />}
      {movies && (
        <>
          <MovieHeading text={movies.title} />
          <Button
            type={"button"}
            children={location?.state?.label ?? "Return"}
            onClick={Return}
          />
          <div className={s.container}>
            <img
              src={
                movies.poster_path
                  ? `https://image.tmdb.org/t/p/w342${movies.poster_path}`
                  : defaultImg
              }
              alt={movies.title}
              width={250}
            />
            <div className={s.description}>
              <h2>{movies.title}</h2>
              <p>Release date: {movies.release_date}</p>
              <p>User Score: {movies.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movies.overview}</p>
              <h4>Genres</h4>
              <p>{movies.genres.map((genre) => genre.name + " ")}</p>
            </div>
          </div>
          <div className={s.more}>
            <h2>Additional information</h2>
            <ul className={s.list}>
              <li>
                <Link
                  to={`/movies/${moviesId.moviesId}/cast`}
                  state={{
                    from: backToPrevLinkRef.current,
                  }}
                >
                  Cast
                </Link>
              </li>

              <li>
                <Link
                  to={`/movies/${moviesId.moviesId}/reviews `}
                  state={{
                    from: backToPrevLinkRef.current,
                  }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
}
