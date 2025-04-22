import React from "react";
import { TextField, Button } from "@mui/material";
import useStyles from "../styles/styles";

const CustomUrlInput = ({ customURL, setCustomURL, onPlay }) => {
  const classes = useStyles();

  return (
    <div className={classes.controls}>
      <TextField
        label="Custom URL"
        variant="outlined"
        size="small"
        value={customURL}
        onChange={(e) => setCustomURL(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onPlay()}
        style={{ flex: 1 }}
      />
      <Button onClick={onPlay} variant="contained">
        Play
      </Button>
    </div>
  );
};

export default CustomUrlInput;
