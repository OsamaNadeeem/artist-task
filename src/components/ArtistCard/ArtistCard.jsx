import React from "react";
import "./ArtistCard.css";
// import img from '../../assets/images/logo512.png'
function ArtistCard(props) {
  const {
    onClick,
    name = "name",
    url = "utl",
    img = require("../../assets/images/logo512.png"),
    image_url,
    containerStyle
  } = props;
  return (
    <div className="ac_container" style={containerStyle} onClick={()=>onClick(name)}>
      <div className="ac_image_container">
        <img src={image_url === undefined ? img : image_url} alt="image not found" className="ac_image" />
      </div>
      <div className="ac_content">
        <p className="ac_p1">{name}</p>
        <p className="ac_p2">{url}</p>
      </div>
    </div>
  );
}

export default ArtistCard;
