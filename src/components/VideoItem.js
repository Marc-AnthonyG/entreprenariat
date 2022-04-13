import React from "react";
import ReactPlayer from "react-player";

function VideoItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link__video">
          <div>
            <h1 className="cards__item__info__label">{props.label}</h1>
          </div>
          <div className="cards__item__video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=lDJli70LHNQ"
              controls={true}
            />
          </div>
        </div>
      </li>
    </>
  );
}

export default VideoItem;
