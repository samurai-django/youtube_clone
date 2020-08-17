import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './VideoCard.css'


function VideoCard({image, title, name, views, timestamp}){
    return(
        <div className="contents">
            {/*  video  */}
            <img className="VideoCard__img" src={image} alt="" />
            <div className="videoCard__info">
                {/*  Avatar */}
                <Avatar className="videoCard__avatar"/>
                {/*  title  */}
                <div className="video__text">
                    {/* name    */}
                    <h4>{title}</h4>
                    <p>{name}</p>
                    {/*  watch times */}
                    <p>{views} views・{timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
