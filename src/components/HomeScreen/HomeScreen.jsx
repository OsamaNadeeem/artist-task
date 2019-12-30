import React, { Component } from "react";
import "./HomeScreen.css";
import SearchField from "../SearchFiled/SearchField";
import ArtistCard from "../ArtistCard/ArtistCard";
import { withRouter } from "react-router-dom";
import axios from "axios";

class HomeScreen extends Component {
  state = {
    searchValue: null,
    data: []
  };
  artistCardHandler = (name) => {
    // alert("artistCardHandler works");
    this.props.history.push({
      pathname: `events/${name}`
    });
  };
  searchHandler = e => {
    this.setState({ searchValue: e.target.value }, () => {
      // console.log("searchValue: ", this.state.searchValue);
      if (
        this.state.searchValue !== null &&
        this.state.searchValue !== "" &&
        this.state.searchValue !== undefined
      ) {
        console.log("if: ", this.state.searchValue);
        axios
          .get(
            `https://rest.bandsintown.com/artists/${this.state.searchValue}?app_id=db9423ef4894daa0eb6a90cdd45d5353`
          )
          .then(res => {
            console.log("res: ", res);
            this.setState({ data: [res.data] });
          })
          .catch(err => console.log(err));
      } else {
        console.log("else: ", this.state.searchValue);
        this.setState({ data: [] });
      }
    });
  };
  render() {
    // console.log(this.state);
    return (
      <div className="h_Container">
        <SearchField
          inputValue={this.state.searchValue}
          searchChange={this.searchHandler}
        />
        <h3 className="h_p1">{this.state.data.length} Results found for "{this.state.searchValue}"</h3>
        <div className="h_div1">
          {this.state.data.map(res => (
            // console.log(res)
            <ArtistCard
              key={res.id}
              img={res.image_url}
              name={res.name}
              url={res.facebook_page_url}
              onClick={this.artistCardHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(HomeScreen);

