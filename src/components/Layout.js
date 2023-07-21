import React from "react";
import NavBar from "./NavBar";
import PlotsModal from "./PlotsModal";
import Sidebar from "./Sidebar";
import {AiOutlinePlus} from 'react-icons/ai'
import BottomNavigation from "./BottomNavigation";
import {navBarOptions} from "./NavBar"
import Dropdown from "./Dropdown"
import Notifications from './Notifications'


function Layout({children,page}) {
    const [openModel,setOpenModel] = React.useState(false);
    const [openAccount,setOpenAccount]=React.useState(false);
    const [openNotificationAction,setOpenNotificationAction]=React.useState(false);
    const [toggleSidebar,setToggleSidebar] = React.useState(false);


    const HandleModal = (open) => {
        setTimeout(() => {
            props.setOpenModal(!open)
        }, 500);
      };

    return (
        <div className={`max-h-screen w-full overflow-x-hidden overflow-y-hidden bg-primary grid grid-cols-6`}>
            <Sidebar setOpenModal={setOpenModel} toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
            <div className={`mx-auto w-full min-h-screen duration-1000 delay-300 ease-in-out lg:pl-4 bg-secondary lg:col-span-5 col-span-6`}>
                {page !='plotDetails'&& <NavBar setOpenAccount={setOpenAccount} setOpenNotificationAction={setOpenNotificationAction} openAccount={openAccount} openNotificationAction={openNotificationAction}/>}
                {children}

                {page !='plotDetails'&&<BottomNavigation setOpenModal={setOpenModel}/>}
            </div>
            {openModel&&<PlotsModal setOpenModal={setOpenModel} openModel={openModel}/>}
            {openNotificationAction&&<Notifications openNotificationAction={openNotificationAction} setOpenNotificationAction={setOpenNotificationAction}/>}
            {openAccount&& <Dropdown options={navBarOptions} className="w-48"/>}
            
        </div>
    );
}

export default Layout;

