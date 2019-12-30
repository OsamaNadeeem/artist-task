import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import EventDetailScreen from "./components/EventDetailScreen/EventDetailScreen";
import { Route, withRouter } from "react-router-dom";
function App() {
  return (
    <Fragment>
      {/* <HomeScreen /> */}
      <Route exact path="/" render={() => <HomeScreen />} />
      <Route exact path="/events/:id" render={() => <EventDetailScreen />} />
      {/* <EventDetailScreen /> */}
    </Fragment>
  );
}

export default withRouter(App);
