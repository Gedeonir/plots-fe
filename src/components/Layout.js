import React from "react";
import NavBar from "./NavBar";
import PlotsModal from "./PlotsModal";
import Sidebar from "./Sidebar";
import {AiOutlinePlus} from 'react-icons/ai'
function Layout({children}) {
    const [openModel,setOpenModel] = React.useState(false);

    return (
        <div className={`flex justify-between max-h-screen w-full overflow-x-hidden bg-primary lg:pr-2`}>
            <Sidebar setOpenModal={setOpenModel}/>
            <div className="mx-auto w-full relative lg:w-4/5 lg:left-32 lg:rounded-t-2xl lg:mt-1 bg-secondary">
                {children}
            </div>
            {openModel&& <PlotsModal setOpenModal={setOpenModel}/>}
        </div>
    );
}

export default Layout;

