import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

function Video() {
  return (
    <div className="video">
      <div className="video__top">
        <img src="https://i.ytimg.com/vi/XzLuMtDelGk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbuObSQJ09zYPAVnzw-3e8NRZDpA" alt="" />
        <span>05:43</span>
      </div>
      <div className="video__title">Create app in 5 minutes #made by Alex</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img src="https://yt3.ggpht.com/ytc/AKedOLQlCDlun57Qr6u6DY-yGM3H7vfXsAo6jgXC7Hvt=s68-c-k-c0x00ffffff-no-rj" alt="" />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  );
}

export default Video;
