import "./OneMix.css"
import "../../src/components/OneMixQueries.css"
import { useParams } from "react-router-dom"

const OneMix = () => {
console.log(useParams());

const {movieId} = useParams()



  return (
    <div className="oneMix">
      <h2>{movieId}</h2>
    </div>
  )
}

export default OneMix
