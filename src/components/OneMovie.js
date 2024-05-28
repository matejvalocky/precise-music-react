import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import list from "../components/list"

import "./OneMovie.css"




const OneMovie = () => {
    

    const{movieId} = useParams()

    const oneSpecificMovie = list.find((oneMovie) => {
        return oneMovie.id === parseInt(movieId) // prevod textu na číslo = parseInt
    }) 

    const {url, title, cover, tracks, author, youtube, housemixes} = oneSpecificMovie

  return <section>
    {/* <h2>Jeden mix</h2>
    <h2>{movieId}</h2> */}
    <h1>{title}</h1>
    <p>mixed by <h3>{author}</h3></p>
    <img src={cover} alt="" />
    <p>{tracks}</p>

    <a href={housemixes} target="_blank">House-Mixes</a> <br />
    <a href={youtube} target="_blank">YouTube</a> <br />
    <a href={url} target="_blank">Download</a> <br />
    <Link to="/mixes"><h3>Return to list of all mixes</h3></Link>
  </section>
}

export default OneMovie
