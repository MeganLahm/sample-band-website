import React from "react";
import "./Music.css";
import SpotifyPlayer from "react-spotify-player";
import Typography from "@material-ui/core/Typography";

const Music = () => {
  const styles = {
    // background: "transparent",
    // boxShadow: "#34a293",
    // onHover: "#34a293",
    // textDecoration: "none",
    // color: "#000000",
    fontFamily: "'Oswald', sans-serif"
  };

  return (
    <div style={styles}>
      <div className="title">
        <Typography style={styles} variant="h1" color="inherit">
          Music
        </Typography>
      </div>
      <Typography color="inherit">New Release:</Typography>

      <div className="spot">
        <SpotifyPlayer
          uri="spotify:album:5RL52Y9Q7wmjcYvibTczjJ"
          size="large"
          view="list"
          theme="black"
        />
        {/* <SpotifyPlayer
          uri="spotify:album:2uSbcplsjXkQAz1n8642nl"
          size="large"
          view="list"
          theme="black"
        /> */}
      </div>
    </div>
  );
};

export default Music;
