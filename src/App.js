import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import NavigationButtons from "./components/NavigationButtons";
import VideoSidebar from "./components/VideoSidebar";
import VideoPlayer from "./components/VideoPlayer";
import VideoInfo from "./components/VideoInfo";
import CustomUrlInput from "./components/CustomUrlInput";
import videoLibrary from "./data/videoLibrary";
import useStyles from "./styles/styles";

const App = () => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customURL, setCustomURL] = useState("");
  const [customVideo, setCustomVideo] = useState(null);

  const handlePrev = () => {
    setCustomVideo(null);
    setCurrentIndex(
      (prev) => (prev - 1 + videoLibrary.length) % videoLibrary.length
    );
  };

  const handleNext = () => {
    setCustomVideo(null);
    setCurrentIndex((prev) => (prev + 1) % videoLibrary.length);
  };

  const handleSelect = (index) => {
    setCustomVideo(null);
    setCurrentIndex(index);
  };

  const handlePlayCustom = () => {
    if (customURL) {
      setCustomVideo({
        title: "Custom Video",
        url: customURL,
        metadata: {
          length: "Unknown",
          description: "User-entered URL",
        },
      });
    }
  };

  const currentVideo = customVideo || videoLibrary[currentIndex];

  return (
    <div>
      <Header />

      <Box className={classes.root}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
          <VideoSidebar videos={videoLibrary} onSelect={handleSelect} />
        </div>

        <Box className={classes.mainContent}>
          <VideoInfo video={currentVideo} />
          <VideoPlayer video={currentVideo} />
        </Box>
      </Box>

      <CustomUrlInput
        customURL={customURL}
        setCustomURL={setCustomURL}
        onPlay={handlePlayCustom}
      />
    </div>
  );
};

export default App;
