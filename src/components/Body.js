import React, { useContext } from "react";
import MainContainer from "./MainContainer";
import closeContext from "../utils/CloseContext";
import searchContext from "../utils/SearchContext";
import Slidebar from "./Sidebar";

const Body = () => {

    const { setClosebtn} = useContext(closeContext);

    const { searchText } = useContext(searchContext);
    return(
        <div className="Body" onMouseDown={()=>{
            if(searchText.replace(/ /g,"") === "")
            {
               setClosebtn(null);
            }
        }}>
            <Slidebar></Slidebar>
            <MainContainer></MainContainer>
        </div>
    )
}

export default Body;