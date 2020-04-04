import React from "react";
//TODO make own styles to change font and such
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import * as constants from "../Constants/Entries";
import TourEntry from "./TourEntry";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = {
  background: "transparent",
  boxShadow: "#34a293",
  onHover: "#34a293",
  textDecoration: "none",
  color: "#000000",
  fontFamily: "'Oswald', sans-serif",
  paddingBottom: "2%"
};
const Tour = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      // backgroundColor: "transparent",
      // justifyContent: "space-around",
      // fontFamily: "'Oswald', sans-serif",
      overflow: "hidden"
    },
    gridList: {
      fontFamily: "'Oswald', sans-serif",
      flexWrap: "wrap",
      overflow: "scroll",
      height: "90vh"
    },
    paper: {
      backgroundColor: "rgba(255, 255, 255, 0.38)"
    },
    paperPast: {
      backgroundColor: "rgba(138, 60, 0, 0.31)"
    },
    tile: {
      height: "30%"
    }
  }));

  const isPast = post => {
    console.log(new Date().getDate());
    if (post.year > new Date().getFullYear()) {
      return true;
    } else if (
      post.month > new Date().getMonth() &&
      post.year == new Date().getYear()
    ) {
      return true;
    } else if (
      post.date >= new Date().getDate() &&
      post.month == new Date().getMonth() &&
      post.year == new Date().getYear()
    ) {
      return true;
    } else {
      return false;
    }
  };

  const classes = useStyles();

  return (
    <div>
      <Typography style={styles} variant="h1" color="inherit">
        Tour Dates
      </Typography>
      <div overflow="visible">
        <GridList cols={1} justify="center" className={classes.gridList}>
          {constants.entryList.map(post => (
            <GridListTile>
              <Paper
                className={isPast(post) ? classes.paper : classes.paperPast}
              >
                <TourEntry
                  location={post.location}
                  date={post.date}
                  year={post.year}
                  month={post.month}
                  city={post.city}
                  button={isPast(post) ? "active" : "inactive"}
                />
              </Paper>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};
export default Tour;
