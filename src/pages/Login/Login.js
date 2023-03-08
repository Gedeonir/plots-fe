import React, { Component } from "react";
import { Box,Button,TextField } from "@mui/material";
import logo from "../../assets/images/logo.png";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import background from '../../assets/images/background.jpeg';
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility,VisibilityOff } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { LoginAction } from "../../redux/Action/SignInAction";


const Login=()=>{
    const navigate=useNavigate();

    const dispatch=useDispatch();

    const loginInfo=useSelector(state => state.LoginReducer);

    const [message,setMessage]=React.useState('');

    console.log(message);

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [credentials, setCredentials] = React.useState({
        email: "",
        password: "",
    });

    const { email, password } = credentials;
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        const loginDetails={
            email:credentials.email,
            password:credentials.password
        }

        dispatch(LoginAction(loginDetails));
      


    }

    React.useEffect(()=>{
        if (loginInfo?.success==true) {
            navigate(`/home`);
        }
    })
    return(
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            background:'#012241',
            minHeight:'100vh'

        }}>
            <Box sx={{
                width:'100%',
                background:`linear-gradient(0deg, rgba(19, 114, 143, 0.3), rgba(19, 114, 143,1)), url(${background})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                padding:10,
                display:{xs:'none',lg:'block',md:'block'}}}>
                <Box sx={{background:'#CCF5FE',width:150,height:150,borderRadius:10,padding:5,margin:'auto'}}>
                    <img src={logo} alt="logo" className="logo"/>
                </Box>
                <Typography sx={{fontSize:'1.9rem',textAlign:'center',fontWeight:700,color:'#CCF5FE'}}>Dr park</Typography>
                
            </Box>
            <Box sx={{background:'#CCF5FE',width:'100%',padding:3}}>
                <Box sx={{width:'90%',margin:'auto',padding:2,display:'block',position:'relative'}}>
                    <Typography sx={{fontSize:'1.9rem',textAlign:'center',fontWeight:700,color:'rgba(19, 114, 143,1)',mb:1}}>Sign into your account</Typography>
                    <Box sx={{padding:1,borderRadius:3}}>
                    {!loginInfo?.success && <Typography sx={{color:'rgb(128,0,0,0.5)',textAlign:'center',fontWeight:700}}>{loginInfo?.error?.response?.data?.message}</Typography>}
                    </Box>
                    <InputLabel sx={{mt:2,mb:2,fontSize:'1.5rem',color:'rgba(19, 114, 143,1)'}}>
                        Email
                    </InputLabel>
                    <TextField
                    size="small"
                    name="email"
                    type="email"
                    sx={{fontSize:'1.5rem',width:'100%',borderRadius:2}}
                    value={email}
                    onChange={(e) => onInputChange(e)}
                    />
                    <InputLabel sx={{mt:5,mb:2,fontSize:'1.5rem',color:'rgba(19, 114, 143,1)'}}>Password</InputLabel>
                    <TextField
                    type={values.showPassword?"text":"password"}
                    name="password"
                    size="small"
                    onChange={(e)=>onInputChange(e)}
                    value={password}
                    sx={{fontSize:'1.5rem',width:'100%',borderRadius:1}}
                    />
                    <Box sx={{position:'absolute',right:10,top:280}}>
                        <IconButton onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword} >
                            {values.showPassword?<Visibility/>:<VisibilityOff/>}
                        </IconButton>
                    </Box>                    
                 
                    
                    <Box sx={{mt:2}}>
                        <Typography sx={{fontSize:'1.1rem',textAlign:'left',fontWeight:700,color:'rgba(19, 114, 143,1)',mt:3}}component={Link} to={`/reset`}>Forgot your password?</Typography>
                    </Box>                        
                    <Button sx={{background:'rgba(19, 114, 143,1)',color:'#CCF5FE',mt:2,':hover': { background:'rgba(19, 114, 143,0.8)',transition:'0.9s'}}} onClick={handleSubmit}>
                        Login
                    </Button>
                    <Box sx={{mt:2}}>
                        <Typography sx={{fontSize:'1.1rem',textAlign:'left',fontWeight:700,color:'rgba(19, 114, 143,1)',mt:3}} component={Link} to={`/reset`}>Don't have account yet?</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


export default Login