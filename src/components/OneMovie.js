import { useParams } from "react-router-dom"




const OneMovie = () => {
    console.log(useParams())

    const{movieId} = useParams()

  return <section>
    <h2>jeden film</h2>
    <h2>{movieId}</h2>
  </section>
}

export default OneMovie
