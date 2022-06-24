import React from "react";
import AlbumCard from "./AlbumCard";
import { useSelector } from "react-redux";
import { selectAlbums } from "../redux/albumSlice";

const Container = (props) => {
    const albums = useSelector(selectAlbums);

    return (
        <div className="main-album-container">
            {albums.map((album, index) => {
            const {artworkUrl100, collectionCensoredName} = album;
            return (
                <AlbumCard key={index} imgLink={artworkUrl100} name={collectionCensoredName} />
            )
            })}
        </div>
    )
}

export default Container;