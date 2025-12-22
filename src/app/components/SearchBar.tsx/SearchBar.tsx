import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/redux/store';
import { fetchAllTasks } from '@/app/redux/slices/taskSlice';

import { SearchBarContainer } from './styles';

const SearchBar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [search, setSearch] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            dispatch(fetchAllTasks(search));
        }
    };

    return (
        <SearchBarContainer
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            value={search}
            fullWidth={true}
            placeholder="Search task"
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                },
            }}
        ></SearchBarContainer>
    );
};

export default SearchBar;
