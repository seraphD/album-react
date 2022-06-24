import React from "react";
import { useSelector } from "react-redux";
import { selectName, selectCount,selectLoading } from "../redux/albumSlice";
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';

const Result = (props) => {
    const name = useSelector(selectName);
    const count = useSelector(selectCount);
    const loading = useSelector(selectLoading);

    return (
        <div className="main-album-header">
            <h3 className="main-album-result">
                {
                    loading ? <CircularProgress /> : name === "" ? "Search Albums by ArtistName:" : `${count} results for ${name}:`
                }
            </h3>
            <Divider variant="middle"/>
        </div>
    )
}

export default Result;