import React, { Component } from "react";
import { RentalCard } from "./RentalCard";

export class RentalList extends Component {
  // render rentals from state array
  renderRentals() {
    return this.props.rentals.map((rental, index) => {
      // 1) return jsx
      // 2) whenever map always make sure to add key
      // 3) send componet down as props
      return (
        <RentalCard key={index} colNum="col-md-3 col-xs-6" rental={rental} />
      );
    });
  }

  render() {
    return <div className="row">{this.renderRentals()}</div>;
  }
}
