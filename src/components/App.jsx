import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import Heading from './Heading/Heading';
import Container from '../utils/Container/Container';
import Spinner from '../utils/Spinner/Spinner';

const HomePage = lazy(()=> import('../pages/Home/Home' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('../pages/Movies/Movies' ))
const MovieDetailsPage = lazy(() => import('../pages/MovieDetails/MovieDetails' ))
const Cast = lazy(() => import('../pages/Cast/Cast' ))
const Reviews = lazy(() => import('../pages/Reviews/Reviews'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

export default function App () {
  return (
    <Container>
      <Suspense fallback={<Spinner timeout={3000}/>}>
        <Heading/>
        <Routes>
          <Route index path="/" element={<HomePage/>}/>
          <Route path="/movies" element={<MoviesPage/>}/> 
          <Route path="/movies/:moviesId" element={<MovieDetailsPage/>}>         
            <Route path='cast' element={<Cast/>} />
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Suspense>
    </Container>);
};
