import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import list from "../components/list"

import "./animatedButtons.css"
import "./animatedButtonsQueries.css"

import youtubeIcon from "../../src/mixIcons/youtube.png"
import housemixesIcon from "../../src/mixIcons/house-mixes.jpg"
import downloadIcon from "../../src/mixIcons/download.png"
import backIcon from "../../src/mixIcons/back.png"




// OBECNE CSS
import "./Content.css"
import "./Wrapper.css"
import "./WrapperQueries.css"


import "./OneMovie.css"
import "./oneMovieQueries.css"




const OneMovie = () => {
    

    const{movieId} = useParams()

    const oneSpecificMovie = list.find((oneMovie) => {
        return oneMovie.id === parseInt(movieId) // prevod textu na číslo = parseInt
    }) 

    const {url, title, cover, tracks, youtube, housemixes} = oneSpecificMovie

  return <div className="content oneMovieBG">
  <div className="wrapper">
    <section>
    {/* <h2>Jeden mix</h2>
    <h2>{movieId}</h2> */}
    <div className="coverTitle">
        <img src={cover} alt="" />
        <h1>{title}</h1>
    </div>
    
    {/* <p>mixed by <h3>{author}</h3></p> */}
    <div className="tracks_icons">
      <p className="tracklist" dangerouslySetInnerHTML={{ __html: tracks }} />



      
      <div class=" iconsUnderOneMix visitButtons tracklist">

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
              <img src={housemixesIcon}  alt="" /> House-Mixes
            </span>
            <i></i>
          </button>
      </a>
          

          
      <Link to="/mixes">
      <button style={{ '--clr': 'white' }}>
            <span>
              <img src={backIcon}  alt="" /> Back
            </span>
            <i></i>
          </button>
      </Link>
</div>


          

      </div>

  
      

     

      
    </div>

    
    
  </section>
  </div>

  </div> 
}

export default OneMovie
