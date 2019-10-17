import React from "react";
import { GeolocationPresentational } from "./GeolocationPresentational";

export class GeolocationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null
    };
    this.handleSuccess = this.handleSuccess.bind(this);
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess);
    }
  }

  handleSuccess({ coords }) {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  }

  render() {
    return <GeolocationPresentational {...this.state} />;
  }
}
