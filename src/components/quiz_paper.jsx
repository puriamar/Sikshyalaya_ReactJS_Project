import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));
export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <h6>{props.question}</h6>
        <div className="col-4">
          <ul className="list-group">
            {props.options.map(option => (
              <li
                onClick={() => props.optionSelect(option, props.answer)}
                key={option}
                className="list-group-item"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => props.onNext(props.index)}
        >
          Another
        </button>
      </Paper>
    </div>
  );
}
