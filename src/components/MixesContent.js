// OBECNE CSS
import "./Content.css"
import "./Wrapper.css"
import "./WrapperQueries.css"

// KONKRETNE CSS
import "./MixesContent.css"
import "./OneMix.css"
import "./OneMixQueries.css"





// import image  from "../../src/images/covers/april-2021.jpg"

import youtubeIcon from "../../src/mixIcons/youtube.png"
import housemixesIcon from "../../src/mixIcons/house-mixes.jpg"
import downloadIcon from "../../src/mixIcons/download.png"


import list from "../components/list"















const MixesContent = () => {







  

  return <div className="mixesContent content">
      <div className="wrapper">
        <h1>Drum and Bass Mixes</h1>
       <div className="allMixes">
         
          {
            list.map((oneMixFromList) => {
              return <div className="oneMix">
              <div className="mixesInfo">
                      <img className="oneMixCover" src={oneMixFromList.cover} alt="" />
                      <h2>{oneMixFromList.title}</h2>
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
