import React from "react";
import ReactPlayer from "react-player";
import { IconButton, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import useStyles from "../styles/styles";

const VideoPlayer = ({ video }) => {
  const classes = useStyles();

  return (
    <div className={classes.videoPlayerWrapper}>
      <Tooltip
        title={`${video.metadata.length} - ${video.metadata.description}`}
        placement="left"
      >
        <IconButton className={classes.infoIcon}>
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <ReactPlayer
        url={video.url}
        controls
        width="100%"
        height="100%"
        style={{ maxHeight: 480 }}
      />
    </div>
  );
};

export default VideoPlayer;
