import React from "react";
import { Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import useStyles from "../styles/styles";

const VideoThumbnail = ({ video, index, onSelect }) => {
  const classes = useStyles();

  return (
    <div className={classes.videoThumbnail} onClick={() => onSelect(index)}>
      <img src={video.thumbnail} alt={video.title} />
      <div
        className="caption"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 50,
        }}
      >
        <span>{video.title}</span>
        <Tooltip
          title={`${video.metadata.length} - ${video.metadata.description}`}
          placement="top"
        >
          <InfoIcon style={{ fontSize: 16, marginLeft: 6 }} />
        </Tooltip>
      </div>
    </div>
  );
};

export default VideoThumbnail;
