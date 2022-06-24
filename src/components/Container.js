import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAlbums, selectName } from "../redux/albumSlice";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Container = (props) => {
    const albums = useSelector(selectAlbums);
    const name = useSelector(selectName);

    return (
        <div className="main-album-container">
            {albums.map((album, index) => {
            const {artworkUrl100, collectionCensoredName, collectionViewUrl} = album;
            return (
                <Card sx={{ maxWidth: 300, margin: "10px 10px" }} variant="outlined" key={`${name}_${index}`}>
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
                    <CardActions disableSpacing>
                        <a target="_blank"  href={collectionViewUrl}> 
                            <Button size="small" >Learn More</Button>
                        </a>
                    </CardActions>
                </Card>
            )
            })}
        </div>
    )
}

export default Container;