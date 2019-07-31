import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 100,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SpacingGrid(props) {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  const { value, onClick } = props;

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {value.map(value => (
            <Grid key={value.id} item>
              <Paper
                id="paper"
                className={classes.paper}
                onClick={() => onClick(value.label)}
              >
                {value.label}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
