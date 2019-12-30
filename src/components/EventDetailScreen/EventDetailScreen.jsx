import React, { Component } from "react";
import "./EventDetailScreen.css";
import SearchField from "../SearchFiled/SearchField";
import ArtistCard from "../ArtistCard/ArtistCard";
import EventDetailCard from "../EventDetailCard/EventDetailCard";
import { withRouter } from "react-router-dom";
import axios from "axios";
class EventDetailScreen extends Component {
  state = {
    data: [],
    user: []
  };
  componentDidMount = async () => {
    let path = await this.props.location.pathname.split("/")[2];
    axios
      .get(
        `https://rest.bandsintown.com/artists/${path}/events?app_id=db9423ef4894daa0eb6a90cdd45d5353&date=`
      )
      .then(Response => {
        this.setState({
          data: Response.data
        });
        axios
          .get(
            `https://rest.bandsintown.com/artists/${path}?app_id=db9423ef4894daa0eb6a90cdd45d5353`
          )
          .then(res => {
            this.setState({
              user: res.data
            });
          });
      });
  };
  backHandler = () => {
    // alert("backHandler works");
    this.props.history.goBack();
    // this.props.history.push({
    //   pathname: "/"
    // });
  };

  render() {
    console.log(this.state);
    return (
      <div className="eds_Container">
        <p className="eds_back_text" onClick={this.backHandler}>
          <i className="material-icons">keyboard_arrow_left</i>Back to results
        </p>
        <div className="eds_div1">
          <ArtistCard
            containerStyle={{ cursor: "default" }}
            {...this.state.user}
          />
        </div>
        <h3 className="eds_p1">{this.state.data.length} Upcoming events</h3>
        <div className="eds_div2">
          {this.state.data &&
            this.state.data.map((v, k) => {
              return <EventDetailCard data={v} key={k} />;
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(EventDetailScreen);
