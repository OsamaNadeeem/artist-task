import React from "react";
import "./EventDetailCard.css";
// import img from '../../assets/images/logo512.png'
function EventDetailCard(props) {
  const {datetime} = props.data
  const {venue } = props.data
  const { name , city,country} = venue
  return (
    <div className="edc_container">
      <p className="edc_p1">EVENT DETAILS</p>
      <div className="edc_div1">
        <div className="edc_list_div edc_country_div">
          <p className="edc_p2">Country</p>
          <p className="edc_p3">{country}</p>
        </div>
        <div className="edc_list_div edc_city_div">
          <p className="edc_p2">City</p>
          <p className="edc_p3">{city}</p>
        </div>
      </div>
      <div className="edc_div2">
        <div className="edc_list_div edc_venue_div">
          <p className="edc_p2">Venue</p>
          <p className="edc_p3">{name}</p>
        </div>
        <div className="edc_list_div edc_date_div">
          <p className="edc_p2">Date</p>
          <p className="edc_p3">{datetime}</p>
        </div> 
      </div>
    </div>
  );
}

export default EventDetailCard;
