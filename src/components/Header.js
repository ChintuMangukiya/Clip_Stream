import React from "react";
import closeContext from "../utils/CloseContext";
import { useContext } from "react";
import searchContext from "../utils/SearchContext";
import UserIcon from "../Icons/User";
import CreateVideo from "../Icons/CreateVideo";
import BellIcon from "../Icons/BellIcon";
import $ from "jquery";


const Header = () => {
  const { searchText, setSearchText } = useContext(searchContext);

  const { closebtn, setClosebtn } = useContext(closeContext);

  const closeImage = () => {
    return (
      <div className="closediv" >
         
        <img
          className="close"
          src="https://static.thenounproject.com/png/1902991-200.png"
          width="10px"
          alt="close"
          
        ></img>

      </div>
    );
  };
  return (
    <div
      className="Header"
      onMouseDown={() => {
        if(searchText.replace(/ /g,"") === "")
        {
          setClosebtn(null);
        }
        else{
          setClosebtn(closeImage);
        }
      }}
    >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Sansita&display=swap" rel="stylesheet" />
      <div className="logo">
        <div className="Humberger" onClick={()=>{
            if($(".side").hasClass("Sidebar") || $(".Maincontainer").hasClass("main"))
            {
              $(".side").removeClass("Sidebar");
              $(".side").addClass("Sidebar1");
              $(".MainContainer").removeClass("main");
              $(".MainContainer").addClass("main1");
            }
            else{
              $(".side").removeClass("Sidebar1");
              $(".side").addClass("Sidebar");
              $(".MainContainer").removeClass("main1");
              $(".MainContainer").addClass("main");
            }
        }}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="logoimage"><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCYsf2VFR1SPC6wqTct7yXF4Y6a27vk4s6A&usqp=CAU"
          width="40px"
          alt="Video Play Icon"
          draggable="false"
        /></div>
        <h1 className="logoname">ClipStream</h1>
      </div>
      <div className="Search-bar">
        <input
          className="search"
          type="text"
          value={searchText}
          onChange={(e) => {
              setSearchText(e.target.value);
            
          }}
          onClick={() => {
            setClosebtn(closeImage);
          }}
        ></input>
        <button className="searchbtn"><img alt="search" src="https://www.svgrepo.com/show/356535/search-button.svg" height="15px"></img></button>
        <div onClick={()=>{
          setClosebtn(null);
          setSearchText("  ");
        }}>{closebtn}</div>
        
      </div>
      <div className="User">
        <CreateVideo></CreateVideo>
        <BellIcon></BellIcon>
        <UserIcon></UserIcon>
      </div>
    </div>
  );
};

export default Header;
