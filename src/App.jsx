import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import Video from "../src/Video";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "white",
  },
  buttonsSection: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor:"#eeeee4",
    marginTop: theme.spacing(2),
    borderRadius: '40px',
    outline: 10,
    width: 300,
    height: 50,
    display: "flex",
    justifyContent : "left",
    alignItems: "left",
    "&:hover": {
      borderColor: "#9c27b0",
      },
  },
  number: {
    backgroundColor: "#9c27b0",
    color: "white",
    width: 30,
    height: 30,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
}));

function Number({ number }) {
  const classes = useStyles();
  return (
    <Typography component="div" className={classes.number}>
      {number}
    </Typography>
  );

}

function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} className={classes.videoSection}>
        <Paper elevation={3}>
          <Video />
        </Paper>
      </Grid>
      <Grid item xs={6} className={classes.buttonsSection}>
        <Button variant="outlined" className={classes.button}>
          <Number number="a" />
          Campaign Structure
        </Button>
        <Button variant="outlined" className={classes.button}>
          <Number number="b" />
          Lean Facebook
        </Button>
        <Button variant="outlined" className={classes.button}>
          <Number number="c" />
          3rd Option
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;
