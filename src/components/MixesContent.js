// OBECNE CSS
import "./Content.css"
import "./Wrapper.css"
import "./WrapperQueries.css"

// KONKRETNE CSS
import "./MixesContent.css"
import "./OneMix.css"
import "./OneMixQueries.css"







import youtubeIcon from "../../src/mixIcons/youtube.png"
import housemixesIcon from "../../src/mixIcons/house-mixes.jpg"
import downloadIcon from "../../src/mixIcons/download.png"


import list from "../components/list"

import { Link } from "react-router-dom"














const MixesContent = () => {

  







  

  return <div className="mixesContent content">
      <div className="wrapper">
        <h1>Drum and Bass Mixes</h1>
       <div className="allMixes">
         
          {
            list.map((oneMixFromList) => {
              return <div className="oneMix" key={oneMixFromList.id}>

              
              <div className="mixesInfo">
                      <Link to={`/all-movies/${oneMixFromList.id}`}>
                        <img className="oneMixCover" src={oneMixFromList.cover} alt="" />
                      </Link>
                      <Link to={`/all-movies/${oneMixFromList.id}`} className="noUnderline">
                         {/* <h2>{oneMixFromList.title}</h2>  */}

                         <div className="addMixInfo">
                            <div className="oneInfo"> <h3>Mix name:</h3> <p>{oneMixFromList.title} </p></div>
                            <div className="oneInfo"><h3>Year:</h3> <p>{oneMixFromList.year} </p></div>
                            <div className="oneInfo"><h3>Style:</h3> <p>Drum and Bass</p></div>
                            <div className="oneInfo"><h3>Duration</h3><p>00:00:00</p></div>
                            <div className="oneInfo"><h3>File size:</h3><p> 0.00 MB</p></div>
                         </div>
                      </Link>
                     
              </div>
              <div className="mixesLinks">
                  <a href={oneMixFromList.youtube} target="_blank" rel="noreferrer"><img src={youtubeIcon} alt="" /></a>
                  <a href={oneMixFromList.housemixes} target="_blank" rel="noreferrer"><img src={housemixesIcon} alt="" /></a>
                  <a href={oneMixFromList.url} target="_blank" rel="noreferrer"><img src={downloadIcon} alt="" /></a>
              </div>

                 
              </div>
            })
          }
       </div>
      </div>
    </div>
}



export default MixesContent
