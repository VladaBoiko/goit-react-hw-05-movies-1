import { useState } from 'react';
import Button from 'utils/Button/Button';
import s from './searchMovie.module.css'
import { toast } from 'react-toastify';

export default function SearchMovie({forSearch, search}) {
    const [input, setInput] = useState('');
    
    const handleFromSubmit = e => {
        e.preventDefault();

        if (!input) {
            toast.warn('No keyword given to initialize search!', {position: 'top-center'});
            forSearch('');
            e.currentTarget.reset();
            return;
        }
        
        forSearch(input);
        e.currentTarget.reset();
    }

    return (
        <>
            <form className={s.search__form} onSubmit={handleFromSubmit}>
                <input type="text" className={s.search__input}
                    placeholder={'Search for a movie...'}
                    onChange={e => setInput(e.target.value.trim())}
            />
                <Button type="submit">
                    Search
                </Button>
            </form>
        </>
    )
}