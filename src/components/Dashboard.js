import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {Box,Link,Skeleton,Button} from "@mui/material";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { styles } from "./styles";
import Divider from "@material-ui/core/Divider";
import { MainListItems } from "./SideBar";
import List from "@material-ui/core/List";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
// import { fetchAllNotifications,deleteNotification,readNotification } from "../redux/Action/NotificationsAction";
import {useDispatch, useSelector} from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useParams } from "react-router";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.jpeg";

const socketUrl = process.env.SOCKET_URL

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

const notify = (toastMsg) => toast(toastMsg);

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken
}

const DashboardLayout = ({ children}) => {
  const token = getToken();
  const dispatch = useDispatch()
  const classes = useStyles();
  // const Notifications = useSelector(state => state.NotificationReducer.notifications)
  // const Notification = useSelector(state => state.getOneNotificationReducer.notification)
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);
  const [loading,setLoading]= React.useState(false)
  const [open, setOpen] = React.useState(false);
  const [Count, setCount] = React.useState(null);
   
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  const handleOpenProfileMenu = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseProfileMenu = (event) => {
    setAnchorElProfile(null);
  };


  // const handleRead = (notificationId) => {
  //   dispatch(readNotification(notificationId))
  //   setOpen(true);
  //   handleCloseNavMenu();
  //   handleNotifications();
  //   handleNotificationCount()
  // };

  // const handleClose = ()=> {
  //   setOpen(false)
  // }

  // const handleDeleteNotification = (notificationId) => {
  //   dispatch(deleteNotification(notificationId))
  //   handleNotificationCount()
  // };


  const handleLogout = () => {
    localStorage.setItem("user", null);
    localStorage.setItem("token", null);
    localStorage.setItem("useruuid", null);
    navigate("/signin");
  };

  const handleNotifications = () =>{
    dispatch(fetchAllNotifications())
      setLoading(false)
  }

  // const handleNotificationAlert=()=>{
  //   const token =localStorage.getItem("token");
  //   const newSocket = io(`${socketUrl}`,{
  //     auth: {
  //       token,
  //     },
  //   });
  //   newSocket.on('newNotification', (notification) => {
  //     notify(notification.content)
  //     handleNotifications();
  //     handleNotificationCount();
  //   });
  // }

  // const handleNotificationCount=()=>{
  //   const token =localStorage.getItem("token");
  //   const newSocket = io(`${socketUrl}`,{
  //     auth: {
  //       token,
  //     },
  //   });

  //   newSocket.on('notificationCount', (notificationCount) => {
  //     setCount(notificationCount)
  //   });
  // }

  const parseToken=(jwtToken)=>{
    try {
      return JSON.parse(atob(jwtToken.split('.')[1]));
    } catch (error) {
      return null
    }
  }
  React.useEffect(() => {
    if (!token) {
      navigate("/user-account/signin");
      console.log("You must sign in first!")
    }else{
      const decodedJwt = parseToken(token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        sessionStorage.clear();
        navigate("/user-account/signin");
        console.log("Your session expired!");
      }
    }
  }, [token])

  // useEffect(() => {
  //   handleNotificationAlert()
  //   handleNotifications();
  //   handleNotificationCount()
  // }, []);

  return (
    <div className={classes.root}>
      {token?(
        <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawer, {
            [classes.closed]: !isOpened,
            [classes.opened]: isOpened,
          }),
        }}
      >
        <Box  className={classes.logo}>
          <img src={logo} alt="logo" className={classes.logoImage}/>
        </Box>
        <List>
          <MainListItems />
        </List>
      </Drawer>
      ):(<></>)}
    {/* <ToastContainer />
      <div className={classes.container}>
        {params?.token?(
            <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawer, {
                [classes.closed]: !isOpened,
                [classes.opened]: isOpened,
              }),
            }}
          >
            <IconButton
            onClick={() => setIsOpened(!isOpened)}
            className={classes.icon}
            >
              {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
            <List>
              <MainListItems />
            </List>
          </Drawer>
        ):(<></>)}

        {/* <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
            <DialogTitle sx={{color:"#fff",background: "#012241",display:"flex",justifyContent:"space-between" }}>
              {Notification.title}
              <DialogActions>
              <Button
                onClick={handleClose}
                sx={{
                  color: "#fff",
                  height: 20,
                }}
              >
                <CloseIcon/>
              </Button>
            </DialogActions>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description" sx={{padding:"16px"}}>
                {Notification.content}
              </DialogContentText>
            </DialogContent>
          </Dialog> */}

        <main className={classes.main}>
          <Box className={classes.appBar}>
              <IconButton
              onClick={() => setIsOpened(!isOpened)}
              className={classes.icon}
              >
                {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
              </IconButton>
              <Box sx={{display:'flex',justifyContent:'end', width:'100%'}}>
              {token?(
                <><Box
                sx={{
                  color: "#fff",
                  display: "block",
                  width: 40,
                  height: 40
                }}
              >
                <Box sx={{ padding: 1, display: 'flex' }} onClick={handleOpenProfileMenu}>
                  <Avatar
                    className={classes.profilePic}
                    alt="profile"
                  >
                    <img src={profile} alt="logo" className={classes.logoImage} />
                  </Avatar>
                </Box>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElProfile}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElProfile)}
                  onClose={handleCloseProfileMenu}
                  sx={{
                    display: "block",
                  }}
                >
                  <div className={classes.Notification}>
                    User Data
                    <Divider />
                  </div>
                  <div>
                    <div className={classes.actions}>
                      <button className={classes.close}><CloseIcon sx={{ fontSize: 14 }} /></button>
                    </div>
                    <MenuItem
                      sx={{ display: "block", textDecoration: "none", p: 2 }}
                      component={Link}
                    >
                      <Typography variant="h6">
                        notification.title
                      </Typography>
                      <Typography>
                        notification.content
                      </Typography>
                    </MenuItem>
                    <Divider />
                  </div>
                </Menu>
              </Box><Box
                sx={{
                  color: "#fff",
                  display: "block",
                  width: 40,
                  height: 40
                }}
              >
                  <IconButton
                    size="medium"
                    aria-label="notifications"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <NotificationsIcon sx={{ fontSize: 26, color: '#CCF5FE' }} />
                    <div className={classes.count}></div>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: "block",
                    }}
                  >
                    <div>
                      <div className={classes.actions}>
                        <button className={classes.close}><CloseIcon sx={{ fontSize: 14 }} /></button>
                      </div>
                      <div className={classes.Notification}>
                        Notifications
                        <Divider />
                      </div>
                      <MenuItem
                        sx={{ display: "block", textDecoration: "none", p: 2 }}
                        component={Link}
                      >
                        <Typography variant="h6">
                          notification.title
                        </Typography>
                        <Typography>
                          notification.content
                        </Typography>
                      </MenuItem>
                      <Divider />
                    </div>
                  </Menu>
                </Box></>
                ):(
                  <button onClick={() => navigate("/user-account/signin")} className={classes.logout}>
                    Login
                  </button>
                )}            
              </Box>
          </Box>
          <Box className="content">
          {children}
          </Box>
          
        </main>
      {/* </div> */}
    </div>
  );
};

export default DashboardLayout;
