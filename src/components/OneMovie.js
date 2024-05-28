import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import list from "../components/list"




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
    <a href={url}>Download</a> <br />
    <a href={youtube}>YouTube</a> <br />
    <a href={housemixes}>House-Mixes</a> <br />
    <img src={cover} alt="" />
    <p>{tracks}</p>
    <Link to="/mixes">Späť na zoznam mixov</Link>
  </section>
}

export default OneMovie
