import { Calculate } from "@mui/icons-material";
import { borderRadius, color, height, padding } from "@mui/system";

export const styles = () => ({
  root: {
    textAlign: "center",
    display: "flex",
    minHeight: "100vh",
    color: "#000133",
  },
  appBar: {
    background: "#13728F",
    color: "#012241",
    display:"flex",
    justifyContent:'space-between',
    padding:'10px 15px'

    
  },
  logo:{
    width:'50px',
    height:"50px",
    borderRadius:"20px",
  },
  logoImage:{
    width:'100%',
  },
  icon: {
    padding: "10px",
    color:"#CCF5FE",
    width:"50px",
  },

  profilePic: {
    marginRight: "90px",
  },
  container: {
    display: "flex",
    flex: 1,
    background: "red",
    minHeight:'100vh',

  },
  drawer: {
    background: "#13728F",
    padding: "10px 0px 0px 0px",
    position: "static",
    transition: "width .5s",
    minHeight:'100vh'
  },

  listItem:{
    background:"#fff"
  },
  ClientDrawer: {
    background: "#012241",
    position: "static",
    transition: "width .5s",
  },
  closed: {
    width: "60px",
  },
  clientOpened: {
    width: "350px",
  },
  opened: {
    width: "200px",
  },
  main: {
    flex: 1,
    width:'40%'
  },
  content:{
    overflow:'scroll'
  },
  // mainClosed:{
  //   background: "#f7f5f5",
  // },
  footer: {
    background: "#FFF",
    height: "50px",
    color: "#012241",
  },
  sideBar: {
    color: "#FFF",
  },
  sideBarIcon: {
    color: "#CCF5FE",
  },
  sideBarItem: {
    color: "#FFF",
  },
  sideBarLink: {
    textDecoration: "none",
    color: "#CCF5FE",
    fontSize: "16px",
    textTransform:'uppercase',
    fontWeight:700
  },
  clientSideBar: {
    padding: "0px 0px 0px 60px",
  },
  listItem: {
    color: "#fff",
  },
  toggleButton: {
    color: "#FFF",
    padding: "10px",
  },
  formFields: {
    display: "flex",
    padding: "0 0 0 20px",
  },
  title: {
    color: "#000",
    marginLeft: "300px",
  },
  routeInput: {
    border: "none",
    padding: "5px",
    marginTop: "20px",
    height: "30px",
    borderTopLeftRadius: "3px",
    borderBottomLeftRadius: "3px",
    boxShadow: "0px 7px 29px 0px #000",
  },
  startButton: {
    border: "none",
    display: "block",
    width: "80px",
    background: "#fff",
    color: "#000",
    cursor: "pointer",
    height: "30px",
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
    boxShadow: "0px 7px 29px 0px #000",
  },
  realTimeResults: {
    background: "#fff",
    width: "260px",
    height: "30vh",
    marginTop: "30px",
    marginLeft: "20px",
    borderRadius: "5px",
    boxShadow: "0px 7px 29px 0px #000",
  },
  logout: {
    width: "100px",
    border: "none",
    outline: "none",
    borderRadius: "10px",
    color: "#CCF5FE",
    cursor: "pointer",
    height:"50px",
    background:'none'


  },
  count:{
    background:"#E4A77A",
    border: "1px solid #fff",
    borderRadius:"50%",
    width:"10px",
    height:"10px",
    position:"relative",
    color:"#fff",
    fontWeight:700,
    top:-6,
    left:-12
  },
  close:{
    color:"#012241",
    cursor:"pointer",
    background:"none",
    border:"none",
    position:"relative",
    width:"100%",
  },
  actions:{
    width:"50px",
    marginLeft:"auto",
    marginRight:"10px"
  },

  Notification:{
    paddingLeft:"12px",
    fontSize:"18px",
    textTransform:"uppercase",
    display:"flex"
  }
});
