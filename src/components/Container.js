import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAlbums, selectName } from "../redux/albumSlice";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

const AlbumsContainer = (props) => {
    const albums = useSelector(selectAlbums);
    const name = useSelector(selectName);
    const albumsPerPage = 12;
    const [page, setPage] = useState(1);
    const [curAlbums, setCurAlbums] = useState([]);
    const handleChange = (e, val) => {
        setPage(val);
    }
    
    useEffect(() => {
        setCurAlbums(albums.slice(page * albumsPerPage, (page + 1) * albumsPerPage));
    }, [page, albums])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {curAlbums.map((album, index) => {
                const {artworkUrl100, collectionCensoredName, collectionViewUrl} = album;
                return (
                    <Grid item sm={6} xs={12} md={4} lg={2} key={`${name}_${index}`}>
                        <Card sx={{ maxWidth: 300, margin: "10px 10px", height: "40vh" }} variant="outlined">
                            <CardMedia
                                component="img"
                                height="194"
                                image={artworkUrl100}
                                alt="loading"
                            />
                            <CardContent>
                            <Typography variant="h5" component="div">
                                {collectionCensoredName}
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <a target="_blank" rel="noreferrer" href={collectionViewUrl}> 
                                    <Button size="small" >Learn More</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                )
                })}
            </Grid>
            <Box sx={{ width: "20%", margin: "auto" }}>
                { albums.length ? <Pagination color="primary" count={Math.floor(albums.length / albumsPerPage)} onChange={handleChange} /> : null }
            </Box>
        </Box>
    )
}

export default AlbumsContainer;