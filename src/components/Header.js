import React from "react";
import { Typography, Box, AppBar, Toolbar } from "@mui/material";
import { getFormattedDate } from "../utils/dateUtil";
import useStyles from "../styles/styles";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Dori UX Interview - Shreyas
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="h6" component="div">
          Date: {getFormattedDate()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
