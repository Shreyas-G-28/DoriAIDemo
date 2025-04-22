import React from "react";
import { Box } from "@mui/material";
import VideoThumbnail from "./VideoThumbnail";
import useStyles from "../styles/styles";

const VideoSidebar = ({ videos, onSelect }) => {
  const classes = useStyles();

  return (
    <Box className={classes.sidebar}>
      {videos.map((video, index) => (
        <VideoThumbnail
          key={video.title + index}
          video={video}
          index={index}
          onSelect={onSelect}
        />
      ))}
    </Box>
  );
};

export default VideoSidebar;
