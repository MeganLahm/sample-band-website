import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { fontFamily, fontStyle } from "@material-ui/system";
const NavBar = () => {
  const styles = {
    background: "transparent",
    boxShadow: "#34a293",
    onHover: "#34a293",
    textDecoration: "none",
    color: "#000000",
    fontFamily: "'Oswald', sans-serif"
  };

  const theme = createMuiTheme({
    palette: {
      textDecoration: "none",
      // textAlign: "center",
      primary: { main: "#474747" },
      secondary: { main: "#4d4d4d" },
      padding: "10px"
    },
    typography: {
      useNextVariants: true,
      fontFamily: "'Oswald', sans-serif",
      textDecoration: "none"
    }
  });

  return (
    <div className="page">
      <MuiThemeProvider theme={theme}>
        <Grid
          container
          spacing={3}
          direction="column"
          // alignItems="center"
          style={styles}
        >
          <Grid item s={12}>
            <Link to="/" style={styles}>
              <Typography variant="h1" color="inherit">
                Tamino
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/music" style={styles}>
              <Button>Music</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/merch" style={styles}>
              <Button>Merch</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/tour" style={styles}>
              <Button>Tour</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/pics" style={styles}>
              <Button>Pictures</Button>
            </Link>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};
export default NavBar;
