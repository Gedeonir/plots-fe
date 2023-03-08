import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import RouteIcon from "@mui/icons-material/Route";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { styles } from "./styles";
// import {
//   AllRoles,
//   Admin,
//   AdminandOperator,
// } from "./../Components/Functions/Function";

const useStyles = makeStyles(styles);
let activeStyle = {
  color: "yellow",
};

export const MainListItems = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [assignment, setAssignment] = useState(false);


  const handleClick = () => {
    setOpen(!open);
  };
  const handleAssignment = () => {
    setAssignment(!assignment);
  };

  const handleToggle = () => {};
  return (
    <div>
      <NavLink
        to="/home"
        className={classes.sideBarLink}
        style={({ isActive }) => (isActive ? undefined : activeStyle)}
      >
        <ListItem>
          <ListItemIcon className={classes.sideBarIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashbaord" />
        </ListItem>
      </NavLink>
    </div>
  );
};


export const ClientSideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.clientSideBar}>
      <form>
        <div className={classes.formFields}>
          <div>
            <select className={classes.routeInput}>
              {Routes.map((item) => (
                <option value={item.latlng} key={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              className={classes.startButton}
              style={{ marginTop: "20px" }}
            >
              Go
            </button>
          </div>
        </div>
      </form>
      <div className={classes.realTimeResults}>RealtTime Results</div>
    </div>
  );
};