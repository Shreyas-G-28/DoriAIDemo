import React from "react";
import { Typography } from "@mui/material";

const VideoInfo = ({ video }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Video Playback - <strong>{video.title}</strong>
      </Typography>
      <p style={{ textDecoration: "underline", color: "blue" }}>{video.url}</p>
    </>
  );
};

export default VideoInfo;
