import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import list from '../components/list';
import youtubeIcon from '../../src/mixIcons/youtube.png';
import housemixesIcon from '../../src/mixIcons/house-mixes.jpg';
import downloadIcon from '../../src/mixIcons/download.png';

import './Content.css';
import './Wrapper.css';
import './WrapperQueries.css';
import './MixesContent.css';
import './MixesContentQueries.css';
import './OneMix.css';
import './OneMixQueries.css';

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

const MixesContent = () => {
  const [fileSizes, setFileSizes] = React.useState({});

  React.useEffect(() => {
    async function fetchFileSizes() {
      const sizes = {};

      for (const mix of list) {
        try {
          const fileId = new URL(mix.url).pathname.split('/')[3];
          const metadata = await getFileMetadata(fileId);
          sizes[mix.id] = bytesToMegabytes(metadata.size);
        } catch (error) {
          console.error(`Error fetching metadata for ${mix.id}:`, error);
          sizes[mix.id] = 'N/A'; // alebo môžete nastaviť na prázdne alebo chybové hlásenie
        }
      }

      setFileSizes(sizes);
    }

    fetchFileSizes();
  }, []);

  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 170, friction: 26 },
  });

  return (
    <div className="mixesContent content">
      <div className="wrapper">
        <h1>Drum and Bass Mixes</h1>
        <animated.div style={props}>
          <div className="allMixes">
            {list.map((oneMixFromList) => (
              <div className="oneMix" key={oneMixFromList.id}>
                <div className="mixesInfo">
                  <Link to={`/all-movies/${oneMixFromList.id}`}>
                    <img
                      className="oneMixCover"
                      src={oneMixFromList.cover}
                      alt=""
                    />
                  </Link>
                  <Link
                    to={`/all-movies/${oneMixFromList.id}`}
                    className="noUnderline"
                  >
                    <div className="addMixInfo">
                      <div className="oneInfo">
                        <p>{oneMixFromList.title}</p>
                      </div>
                      <div className="oneInfo">
                        <h3>Year:</h3>
                        <p>{oneMixFromList.year}</p>
                      </div>
                      <div className="oneInfo">
                        <h3>Style:</h3>
                        <p>Drum and Bass</p>
                      </div>
                      <div className="oneInfo">
                        <h3>Duration:</h3>
                        <p>N/A</p>
                      </div>
                      <div className="oneInfo">
                        <h3>File size:</h3>
                        <p>{fileSizes[oneMixFromList.id] + " MB" || 'Loading...'}</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="mixesLinks">
                  <a
                    href={oneMixFromList.youtube}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={youtubeIcon} alt="" />
                  </a>
                  <a
                    href={oneMixFromList.housemixes}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={housemixesIcon} alt="" />
                  </a>
                  <a
                    href={oneMixFromList.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={downloadIcon} alt="" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default MixesContent;
