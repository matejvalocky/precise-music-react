import "./OneMix.css"

const OneMix = (props) => {




  return (
    <div className="oneMix">
        <img src={props.mixImage} alt="" />
        <h2>{props.mixTitle}</h2>
        <a href={props.mixUrl}>Stiahni</a>
        
    </div>
  )
}

export default OneMix
