import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const useStyles = makeStyles({
video: {
margin: "0",
padding: "o",
width: "100%",
height: "100vh",
objectFit: "cover",
},
welcome: {
color: "white",
fontSize: "50px",
position: "absolute",
top: "60px",
left: "40px",
},
playButton: {
color: "white",
position: "absolute",
top: "50%",
left: "25%",
width: "100px",
height: "100px",
transform: "translate(-50%, -50%)",
},
});

const Video = () => {
const classes = useStyles();
const [video, setVideo] = useState(null);
const [audio, setAudio] = useState(null);
const [isPlaying, setIsPlaying] = useState(false);

const playVideo = () => {
video.play();
setIsPlaying(true);
};

const pauseVideo = () => {
video.pause();
setIsPlaying(false);
};

const togglePlay = () => {
if (isPlaying) {
pauseVideo();
} else {
playVideo();
}
};

const muteAudio = () => {
audio.muted = true;
};

return (
<React.Fragment>
<Typography component="div" className={classes.welcome}>
Welcome
</Typography>
<video
autoPlay
className={classes.video}
data-qa="media-player"
data-testid="media-player-video"
id="player"
loop
playsInline
preload="auto"
ref={(el) => setVideo(el)}
src="https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?"
>
<track
default
ref={(el) => setAudio(el)}
src="blob:https://www.videoask.com/3035c99e-8132-49ba-9fe7-d9fc6198aec4"
type="captions"
/>
</video>
<PlayCircleOutlineIcon
className={classes.playButton}
onClick={() => {
togglePlay();
muteAudio();
}}
/>
</React.Fragment>
);
};

export default Video;