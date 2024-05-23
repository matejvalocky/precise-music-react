import { Link } from "react-router-dom"

const Error = () => {
  return <div>
    <h2>404</h2>
    <p>Stránka neexistuje</p>
    <p><Link to="/">Úvodná strana</Link></p>
  </div>
}

export default Error
