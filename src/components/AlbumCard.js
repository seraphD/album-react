import react from "react";

class AlbumCard extends react.Component {
    constructor(props) {
        super(props);
        const { imgLink, name } = props;
        this.state = {
            imgLink,
            name
        }
    }

    render() {
        const { imgLink, name } = this.state;

        return (
            <div className="album-card">
                <img src={imgLink} alt="album card"></img>
                <div className="album-name">
                    {name}
                </div>
            </div>
        )
    }
}

export default AlbumCard;