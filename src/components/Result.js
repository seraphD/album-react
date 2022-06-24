import React from "react";
import { useSelector } from "react-redux";
import { selectName, selectCount } from "../redux/albumSlice";

const Result = (props) => {
    const name = useSelector(selectName);
    const count = useSelector(selectCount);

    return (
        <div className="main-album-header">
            <h3 className="main-album-result">
                {
                    name === "" ? "Search Albums by ArtistName:" : `${count} results for ${name}`
                }
            </h3>
            <div className="divider"></div>
        </div>
    )
}

export default Result;