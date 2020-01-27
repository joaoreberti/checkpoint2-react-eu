import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  underlineNone: {
    textDecoration: "none"
  },
  underlineHover: {
    textDecoration: "none"
  },
  appBar: {
    backgroundColor: "#493f46",
    color: "#ffcbcc"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontFamily: "Libre Franklin",
    color: "white"
  }
}));

const NavBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h2"
            className={classes.title}
            component={Link}
            href="/games"
          >
            Video Games
          </Typography>
          <Button color="inherit" onClick={props.filterByRating}>
            {props.filteredByRating ? "All Games" : "Best Games"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
