import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 130,
    width: 130
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SpacingGrid(props) {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  const { lesson: value, onClick } = props;

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {value.map(value => (
            <Grid key={value.topic} item>
              <Paper
                id="paper"
                className={classes.paper}
                onClick={() => onClick(value)}
              >
                <img
                  id="button-img"
                  src="https://img.icons8.com/ios/32/000000/literature.png"
                  alt=""
                />
                <br />
                {value.topic}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
