import React, { useState } from "react";
import fetchAlbums from '../api/fetchAlbums';
import { useDispatch } from "react-redux/es/exports";
import { search, startLoading, endLoading } from "../redux/albumSlice";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);

    const searchAlbum = async (name, e) => {
        if (name.length) {
            dispatch(startLoading());
            const { results } = await fetchAlbums(name);
            dispatch(search({ results, name }));
            dispatch(endLoading());
        }
        else {
            setAnchorEl(e.currentTarget)
        }
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <div className="header">
            <div className="main-header">
                <Paper
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, height: 40, zIndex: 5 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={e => setName(e.target.value)}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={e => searchAlbum(name, e)}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>Please fill out this field.</Typography>
                </Popover>
            </div>
        </div>
    )
}

export default NavBar;