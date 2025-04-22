// src/styles/styles.js

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    marginBottom: 10,
  },
  root: {
    height: "calc(100vh - 64px)",
    display: "flex",
    flexDirection: "row",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
  },
  sidebar: {
    width: "400px",
    backgroundColor: "#f5f5f5",
    padding: 20,
    display: "grid",
    gap: 10,
    height: "543px",
    overflowY: "auto",
  },
  videoThumbnail: {
    position: "relative",
    cursor: "pointer",
    "& img": {
      width: "100%",
      borderRadius: 4,
    },
    "& .caption": {
      position: "absolute",
      bottom: 0,
      background: "rgba(0, 0, 0, 0.6)",
      color: "white",
      width: "100%",
      padding: "2px 6px",
      fontSize: 12,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#fff",
  },
  videoPlayerWrapper: {
    position: "relative",
    flex: 1,
  },
  infoIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    color: "white",
    zIndex: 1,
  },
  controls: {
    marginTop: 10,
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  navigationButtons: {
    display: "flex",
    gap: 20,
  },
  navButton: {
    width: 200,
    height: 40,
  },
});

export default useStyles;
