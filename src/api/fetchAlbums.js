import fetchJsonp from "fetch-jsonp";

export default function fetchAlbums(ARTIST_NAME) {
    const URL = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`
    return fetchJsonp(URL)
    .then(res => {
        return res.json()
    })
    .then(json => {
        return json;
    })
}