import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import * as constants from "../Constants/Constants";
import Modal from "@material-ui/core/Modal";

const PicsPage = props => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({
    name: "moody1.JPG"
  });

  const createPicsList = () => {
    //TODO: refactor to dynamically grab from 'images folder'
    let list = [];

    console.log(list);
    return list;
  };

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "transparent",
      justifyContent: "space-around",
      fontFamily: "'Oswald', sans-serif",
      overflow: "hidden"
    },
    typography: {
      fontFamily: "'Oswald', sans-serif"
    },
    gridList: {
      width: "80vw",
      height: "70vh",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)"
    },
    titleBar: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
        "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      fontFamily: "'Oswald', sans-serif"
    },
    headings: {
      paddingBottom: 80,
      fontFamily: "'Oswald', sans-serif"
    },
    page: {
      backgroundImage: require("../images/fallduluth.JPG")
    },
    modal: {
      marginTop: "8%",
      overflow: "visible",
      height: "70vh"
    }
  }));

  function handleModal(e) {
    console.log(currentImage);
    setShowModal(true);
  }

  const classes = useStyles();
  //TODO: Refactor to get rid of constants, and instead dynamically reach photos from the 'images' folder
  return (
    <div className="page">
      <div className={classes.headings}>
        <Typography className={classes.typography} variant="h1" color="inherit">
          Pictures
        </Typography>
      </div>
      <div className={classes.root}>
        <GridList
          onClick={handleModal}
          cellHeight={200}
          spacing={5}
          cols={3}
          className={classes.gridList}
        >
          {constants &&
            constants.pics.map(image => (
              <GridListTile>
                <img
                  src={require("../images/" + image)}
                  alt={image}
                  onClick={() =>
                    setCurrentImage({ name: image }) && handleModal
                  }
                />
                <GridListTileBar
                  title={image}
                  titlePosition="top"
                  className={classes.titleBar}
                />
              </GridListTile>
            ))}
        </GridList>
      </div>
      <div>
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          onClick={() => setShowModal(false)}
        >
          <img
            src={require("../images/" + currentImage.name)}
            className={classes.modal}
          />
        </Modal>
      </div>
    </div>
  );
};
export default PicsPage;
