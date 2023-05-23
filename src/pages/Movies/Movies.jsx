import { useSearchParams } from 'react-router-dom';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import ListMovies from 'components/ListMovies/ListMovies';

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search'); 

    return (
        <div>
        <SearchMovie forSearch={search => setSearchParams({ search })}
        search={search}/>
        <ListMovies search={search}/>
        </div>

    )
}