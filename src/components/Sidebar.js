import React from "react";
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import SidebarOption from "./SidearOption";

function Sidebar(){
    return(
        <div className="sidebar">

            <SidebarOption Icon={HomeIcon} text="home" selected="selected"/>

            <SidebarOption Icon={WhatshotIcon} text="hot" />
            <SidebarOption Icon={SubscriptionsIcon} text="subscribe" />
            <SidebarOption Icon={YouTubeIcon} text="original" />
            <hr/>
            <SidebarOption Icon={VideoLibraryIcon} text="library" />
            <SidebarOption Icon={HistoryIcon} text="history" />
            <SidebarOption Icon={WatchLaterIcon} text="watch later" />
            <SidebarOption Icon={ThumbUpAltIcon} text="good" />
            <hr/>



        </div>
    )
}

export default Sidebar
