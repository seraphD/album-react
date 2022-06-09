import React from 'react';
import './css/index.css';
import fetchAlbums from './api/fetchAlbums';
import AlbumCard from './components/AlbumCard';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      loading: false,
      loaded: false,
      count: 0,
      name: "",
    }
  }

  search = async (ArtistName) => {
    this.setState({loading: true, loaded: false, name: ArtistName, albums: []});

    const data = await fetchAlbums(ArtistName);
    const { resultCount, results } = data;
    this.setState({
      loading: false,
      count: resultCount,
      albums: results,
      loaded: true
    })
  }

  render() {
    const { loading, loaded } = this.state;
    const { count, name } = this.state;
    const { albums } = this.state;

    return (
      <div className='container'>
        <div className="header">
            <div className="main-header">
                <input type="text" className="search-input" placeholder="Search..." />
                <img src={require("./icons/search.png")} className="search-icon" alt="" onClick={e => this.search(e.target.value)}/>
                <div className="empty-warning">
                    <div className="empty-warning-traingle"></div>
                    Please fill out this field.
                </div>
            </div>
        </div>
        <div className="main">
            <div className="main-album-header">
                <h3 className="main-album-result">
                  {loading ? "" : loaded ? `${count} results for ${name}` : "Search Albums by ArtistName:"}
                </h3>
                {loading ? <div className="loader">Loading...</div> : null}
                <div className="divider"></div>
            </div>
            <div className="main-album-container">
              {albums.map((album, index) => {
                const {artworkUrl100, collectionCensoredName} = album;
                return (
                  <AlbumCard key={index} imgLink={artworkUrl100} name={collectionCensoredName} />
                )
              })}
            </div>
        </div>
      </div>
    )
  }
}

export default Album;
