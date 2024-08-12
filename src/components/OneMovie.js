import React from 'react';
import { useParams, Link } from 'react-router-dom';
import list from '../components/list';
import { parseBuffer } from 'music-metadata';
import './animatedButtons.css';
import './animatedButtonsQueries.css';
import youtubeIcon from '../../src/mixIcons/youtube.png';
import housemixesIcon from '../../src/mixIcons/house-mixes.jpg';
import downloadIcon from '../../src/mixIcons/download.png';
import backIcon from '../../src/mixIcons/back.png';
import './Content.css';
import './Wrapper.css';
import './WrapperQueries.css';
import './OneMovie.css';
import './oneMovieQueries.css';

// Vložte svoj API kľúč tu
const API_KEY = 'AIzaSyAVxoq7SyYXVyrqBL8MwIzmTllnQlUBDD8';

// Funkcia na získanie metadát súboru z Google Drive
async function getFileMetadata(fileId) {
  const response = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=size,name,mimeType&key=${API_KEY}`);
  const data = await response.json();
  return data;
}

// Funkcia na prevod bajtov na megabajty
function bytesToMegabytes(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2); // zaokrúhľuje na dve desatinné miesta
}



const OneMovie = () => {
  const { movieId } = useParams();
  const oneSpecificMovie = list.find((oneMovie) => oneMovie.id === parseInt(movieId));
  const { url, title, cover, tracks, youtube, housemixes } = oneSpecificMovie;

  const [metadata, setMetadata] = React.useState(null);
  

  React.useEffect(() => {
    async function fetchData() {
      try {
        // Extrakcia ID súboru z URL
        const fileId = new URL(url).pathname.split('/')[3];
        const fileMetadata = await getFileMetadata(fileId);
        setMetadata(fileMetadata);

      } catch (error) {
        console.error('Chyba pri získavaní metadát', error);
      }
    }

    fetchData();
  }, [url]);

  return (
    <div className="content oneMovieBG">
      <div className="wrapper">
        <section>
          <div className="coverTitle">
            <img src={cover} alt="" />
            <h1>{title}</h1>
          </div>

          <p className="tracklist" dangerouslySetInnerHTML={{ __html: tracks }} />

          {metadata && (
            <div className="metadata">

              <h2>File information</h2>

              <div className="metadataItem">
                <h3>Name:</h3>
                <p> {metadata.name}</p>
              </div>

              <div className="metadataItem">
                  <h3>Size:</h3>
                  <p> {bytesToMegabytes(metadata.size)} MB</p>
              </div>


              <div className="metadataItem">
                <h3>Type:</h3>
                <p>{metadata.mimeType}</p>
              </div>

              <div className="metadataItem">
                <h3>Duration:</h3>
                <p>N/A</p>
              </div>

            </div>
          )}

          <div className="iconsUnderOneMix visitButtons tracklist">
            <div className="buttonGroup">
              <a href={url} target="_blank" rel="noreferrer">
                <button style={{ '--clr': '#39FF14' }}>
                  <span>
                    <img src={downloadIcon} alt="" /> Download Mix
                  </span>
                  <i></i>
                </button>
              </a>

              <a href={youtube} target="_blank" rel="noreferrer">
                <button style={{ '--clr': 'red' }}>
                  <span>
                    <img src={youtubeIcon} alt="" /> YouTube
                  </span>
                  <i></i>
                </button>
              </a>
            </div>

            <div className="buttonGroup">
              <a href={housemixes} target="_blank" rel="noreferrer">
                <button style={{ '--clr': 'orange' }}>
                  <span>
                    <img src={housemixesIcon} alt="" /> House-Mixes
                  </span>
                  <i></i>
                </button>
              </a>

              <Link to="/mixes">
                <button style={{ '--clr': 'white' }}>
                  <span>
                    <img src={backIcon} alt="" /> Back
                  </span>
                  <i></i>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OneMovie;