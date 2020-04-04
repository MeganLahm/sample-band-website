import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
//TODO: figure out how to link outside site
const TourEntry = props => {
  const styles = {
    // background: "transparent",
    // boxShadow: "#34a293",
    // onHover: "#34a293",
    textDecoration: "none"
    // color: "#000000",
    // fontFamily: "'Oswald', sans-serif",
    // paddingBottom: "2%"
  };

  return (
    <div style={styles}>
      <h>
        {props.month}/{props.date}/{props.year}
      </h>
      <li>{props.location}</li>
      <li>{props.city}</li>
      {props.button == "active" && (
        <Button>
          <a href="ticketmaster.com">TICKETS</a>
        </Button>
      )}
    </div>
  );
};

export default TourEntry;
