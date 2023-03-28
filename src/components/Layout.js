import React from "react";
import NavBar from "./NavBar";
import PlotsModal from "./PlotsModal";
import Sidebar from "./Sidebar";

function Layout({children}) {
    const [openModel,setOpenModel] = React.useState(true);

    return (
        <div className={`flex justify-between min-h-screen w-full overflow-x-hidden bg-primary lg:pr-5`}>
            <Sidebar setOpenModal={setOpenModel}/>
            <div className="mx-auto min-h-screen w-full relative lg:w-4/5 lg:left-32 rounded-t-2xl mt-2 bg-secondary">
                {children}
            </div>
            {openModel&& <PlotsModal setOpenModal={setOpenModel}/>}
        </div>
    );
}

export default Layout;

