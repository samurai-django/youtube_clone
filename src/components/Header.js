import React from "react";
import './Header.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';

function Header(){
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />

                <img
                    className="header__logo"
                    src="https://wifi-style.com/wp-content/uploads/2018/12/youtube-logo-e1560646301439.png"
                    alt=""

                />


            </div>
            <div className="header_middle">
                <input
                    className="header_search"
                    placeholder="Search"
                    type="text"
                />
                <SearchIcon />
            </div>


            <div className="header_right">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <PersonIcon className="header_icon"/>
            </div>


        </div>

    )
}

export default Header;
