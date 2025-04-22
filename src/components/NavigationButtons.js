import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useStyles from "../styles/styles";

const NavigationButtons = ({ onPrev, onNext }) => {
  const classes = useStyles();

  return (
    <div className={classes.navigationButtons}>
      <Button
        className={classes.navButton}
        onClick={onPrev}
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
      >
        Prev Video
      </Button>
      <Button
        className={classes.navButton}
        onClick={onNext}
        variant="contained"
        endIcon={<ArrowForwardIosIcon />}
      >
        Next Video
      </Button>
    </div>
  );
};

export default NavigationButtons;
