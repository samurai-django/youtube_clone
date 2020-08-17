import React from "react";
import './SidebarOption.css'


function SidebarOption({ selected, text, Icon }){
    return (
        <div className={`sidebarOption ${selected && "selected"}`}>
            <Icon className= "sidebarOption__Icon" />
            <h2 className="sidebarOption__text">{text}</h2>
        </div>
    );

}

export default SidebarOption
