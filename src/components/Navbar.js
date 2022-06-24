import React, { useState } from "react";
import fetchAlbums from '../api/fetchAlbums';
import { useDispatch } from "react-redux/es/exports";
import { search } from "../redux/albumSlice";

const NavBar = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const searchAlbum = async (name) => {
        if (name.length) {
            const { results } = await fetchAlbums(name);
            dispatch(search({ results, name }));
        }
    }
    
    return (
        <div className="header">
            <div className="main-header">
                <input type="text" className="search-input" placeholder="Search..." onChange={e => setName(e.target.value)} />
                <img src={require("../icons/search.png")} className="search-icon" alt="" onClick={e => searchAlbum(name)}/>
                <div className="empty-warning">
                    <div className="empty-warning-traingle"></div>
                    Please fill out this field.
                </div>
            </div>
        </div>
    )
}

export default NavBar;