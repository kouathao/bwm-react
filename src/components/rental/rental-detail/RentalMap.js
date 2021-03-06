import React, { Component } from "react";
import { GOOGLE_API } from "../../../helpers/misc";
import { MapWithGeocode } from "../../map/GoogleMap";

export class RentalMap extends Component {
  render() {
    const location = this.props.location;

    return (
      <MapWithGeocode
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API}&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `360px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={location}
      />
    );
  }
}
