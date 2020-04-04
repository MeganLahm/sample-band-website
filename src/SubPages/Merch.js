import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Merch = () => {
  const styles = {
    background: "transparent",
    color: "#000000",
    fontFamily: "'Oswald', sans-serif"
  };

  return (
    <div>
      <Typography style={styles} variant="h1" color="inherit">
        Merch
      </Typography>
      <Typography style={styles} variant="h5" color="inherit">
        Coming Soon
      </Typography>
    </div>
  );
};

export default Merch;
