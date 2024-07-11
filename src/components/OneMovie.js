import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import list from "../components/list"

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

    const {url, title, author, cover, tracks, youtube, housemixes} = oneSpecificMovie

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

      <div className="iconsUnderOneMix">
          <a href={housemixes} target="_blank" rel="noreferrer"><img src={housemixesIcon} alt=""  /></a> <br />
          <a href={youtube} target="_blank" rel="noreferrer"><img src={youtubeIcon} alt="" /></a> <br />
          <a href={url} target="_blank" rel="noreferrer"><img src={downloadIcon} alt="" /></a> <br /> 
          <Link to="/mixes"><img className="backImage" src={backIcon} alt="" /></Link>
      </div>
    </div>

    
    
  </section>
  </div>

  </div> 
}

export default OneMovie
