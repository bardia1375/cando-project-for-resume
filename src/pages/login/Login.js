// import React, { useState } from "react";
// import {
//   Grid,
//   CircularProgress,
//   Typography,
//   Button,
//   Tabs,
//   Tab,
//   TextField,
//   Fade,
// } from "@material-ui/core";
// import { withRouter } from "react-router-dom";
// import classnames from "classnames";

// // styles
// import useStyles from "./styles";

// // logo
// import logo from "./logo.svg";
// import google from "../../images/google.svg";

// // context
// import { useUserDispatch, loginUser } from "../../context/UserContext";
// import { EditLocation } from "@material-ui/icons";

// function Login(props) {
//   var classes = useStyles();

//   // global
//   var userDispatch = useUserDispatch();

//   // local
//   var [isLoading, setIsLoading] = useState(false);
//   var [error, setError] = useState(null);
//   var [activeTabId, setActiveTabId] = useState(0);
//   var [nameValue, setNameValue] = useState("");
//   var [loginValue, setLoginValue] = useState("admin@flatlogic.com");
//   var [passwordValue, setPasswordValue] = useState("password");

//   return (
//     <Grid container className={classes.container}>
//       <div className={classes.logotypeContainer}>
//         <img src={EditLocation} alt="logo" className={classes.logotypeImage} />
//         <Typography className={classes.logotypeText}>Material Admin</Typography>
//       </div>
//       <div className={classes.formContainer}>
//         <div className={classes.form}>
//           <Tabs
//             value={activeTabId}
//             onChange={(e, id) => setActiveTabId(id)}
//             indicatorColor="primary"
//             textColor="primary"
//             centered
//           >
//             <Tab label="Login" classes={{ root: classes.tab }} />
//             <Tab label="New User" classes={{ root: classes.tab }} />
//           </Tabs>

//           {activeTabId === 0 && (
//             <React.Fragment>
//               <Typography variant="h1" className={classes.greeting}>
//                 Good Morning, User
//               </Typography>
//               <Button size="large" className={classes.googleButton}>
//                 <img src={google} alt="google" className={classes.googleIcon} />
//                 &nbsp;Sign in with Google
//               </Button>
//               <div className={classes.formDividerContainer}>
//                 <div className={classes.formDivider} />
//                 <Typography className={classes.formDividerWord}>or</Typography>
//                 <div className={classes.formDivider} />
//               </div>
//               <Fade in={error}>
//                 <Typography color="secondary" className={classes.errorMessage}>
//                   Something is wrong with your login or password :(
//                 </Typography>
//               </Fade>
//               <TextField
//                 id="email"
//                 InputProps={{
//                   classes: {
//                     underline: classes.textFieldUnderline,
//                     input: classes.textField,
//                   },
//                 }}
//                 value={loginValue}
//                 onChange={e => setLoginValue(e.target.value)}
//                 margin="normal"
//                 placeholder="Email Adress"
//                 type="email"
//                 fullWidth
//               />
//               <TextField
//                 id="password"
//                 InputProps={{
//                   classes: {
//                     underline: classes.textFieldUnderline,
//                     input: classes.textField,
//                   },
//                 }}
//                 value={passwordValue}
//                 onChange={e => setPasswordValue(e.target.value)}
//                 margin="normal"
//                 placeholder="Password"
//                 type="password"
//                 fullWidth
//               />
//               <div className={classes.formButtons}>
//                 {isLoading ? (
//                   <CircularProgress size={26} className={classes.loginLoader} />
//                 ) : (
//                   <Button
//                     disabled={
//                       loginValue.length === 0 || passwordValue.length === 0
//                     }
//                     onClick={() =>
//                       loginUser(
//                         userDispatch,
//                         loginValue,
//                         passwordValue,
//                         props.history,
//                         setIsLoading,
//                         setError,
//                       )
//                     }
//                     variant="contained"
//                     color="primary"
//                     size="large"
//                   >
//                     Login
//                   </Button>
//                 )}
//                 <Button
//                   color="primary"
//                   size="large"
//                   className={classes.forgetButton}
//                 >
//                   Forget Password
//                 </Button>
//               </div>
//             </React.Fragment>
//           )}

//           {activeTabId === 1 && (
//             <React.Fragment>
//               <Typography variant="h1" className={classes.greeting}>
//                 Welcome!
//               </Typography>
//               <Typography variant="h2" className={classes.subGreeting}>
//                 Create your account
//               </Typography>
//               <Fade in={error}>
//                 <Typography color="secondary" className={classes.errorMessage}>
//                   Something is wrong with your login or password :(
//                 </Typography>
//               </Fade>
//               <TextField
//                 id="name"
//                 InputProps={{
//                   classes: {
//                     underline: classes.textFieldUnderline,
//                     input: classes.textField,
//                   },
//                 }}
//                 value={nameValue}
//                 onChange={e => setNameValue(e.target.value)}
//                 margin="normal"
//                 placeholder="Full Name"
//                 type="text"
//                 fullWidth
//               />
//               <TextField
//                 id="email"
//                 InputProps={{
//                   classes: {
//                     underline: classes.textFieldUnderline,
//                     input: classes.textField,
//                   },
//                 }}
//                 value={loginValue}
//                 onChange={e => setLoginValue(e.target.value)}
//                 margin="normal"
//                 placeholder="Email Adress"
//                 type="email"
//                 fullWidth
//               />
//               <TextField
//                 id="password"
//                 InputProps={{
//                   classes: {
//                     underline: classes.textFieldUnderline,
//                     input: classes.textField,
//                   },
//                 }}
//                 value={passwordValue}
//                 onChange={e => setPasswordValue(e.target.value)}
//                 margin="normal"
//                 placeholder="Password"
//                 type="password"
//                 fullWidth
//               />
//               <div className={classes.creatingButtonContainer}>
//                 {isLoading ? (
//                   <CircularProgress size={26} />
//                 ) : (
//                   <Button
//                     onClick={() =>
//                       loginUser(
//                         userDispatch,
//                         loginValue,
//                         passwordValue,
//                         props.history,
//                         setIsLoading,
//                         setError,
//                       )
//                     }
//                     disabled={
//                       loginValue.length === 0 ||
//                       passwordValue.length === 0 ||
//                       nameValue.length === 0
//                     }
//                     size="large"
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     className={classes.createAccountButton}
//                   >
//                     Create your account
//                   </Button>
//                 )}
//               </div>
//               <div className={classes.formDividerContainer}>
//                 <div className={classes.formDivider} />
//                 <Typography className={classes.formDividerWord}>or</Typography>
//                 <div className={classes.formDivider} />
//               </div>
//               <Button
//                 size="large"
//                 className={classnames(
//                   classes.googleButton,
//                   classes.googleButtonCreating,
//                 )}
//               >
//                 <img src={google} alt="google" className={classes.googleIcon} />
//                 &nbsp;Sign in with Google
//               </Button>
//             </React.Fragment>
//           )}

//         </div>
//         <Typography color="primary" className={classes.copyright}>
//         © 2014-{new Date().getFullYear()} <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://flatlogic.com" rel="noopener noreferrer" target="_blank">Flatlogic</a>, LLC. All rights reserved.
//         </Typography>
//       </div>
//     </Grid>
//   );
// }

// export default withRouter(Login);

import React, { useRef, useState ,useContext } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useParams ,useHistory} from "react-router";
import { useUserDispatch, loginUser } from "../../context/UserContext";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "../api/axios"
import  AuthContext from  "../context/AuthProvider"
// styles
import useStyles from "./styles";
import "./styles.css";




function Login(props) {

  const { setAuth } = useContext(AuthContext)


  var classes = useStyles();
  const history = useHistory();
  const errRef = useRef();
  const[state,setState]=useState({phoneNumber:""})
  const [errMsg, setErrMsg] = useState('');
  // global
  var userDispatch = useUserDispatch();
  // const phoneRegExp = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
  const phoneRegExp = /09([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/;

  const validationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(
        phoneRegExp,
        "شماره موبایل را بدون صفر و با حروف انگلیسی وارد کنید",
      ),
  });
  


  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  

const handleChangenumber=(event)=>{
  // setState(e.target.value)
  const { name, value } = event.target;
  setState((prevState) => ({
    ...prevState,
    [name]: value
  }));

}


 console.log("state",state)


  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
    // data.preventDefault();
    try{
          //  const response = axios.post("",JSON.stringify(data.phoneNumber),{
          //       headers: { 'Content-Type': 'application/json' },
          //       withCredentials: true
          //  })
          //  console.log(response.data);
          //  console.log(JSON.stringify(response))       

           history.push(
           { 
             pathname:  "./login/smsVerification",
             state
           }
           );
           localStorage.setItem("data",data.phoneNumber.toString())
           console.log("phone", data.phoneNumber.toString());

    }catch (err) {
      if (!err?.response) {
          setErrMsg(' پاسخی از سرور دریافت نشد لطفا از وصل بودن اینترنت خود اطمینان حاصل نمایید و مجدد تلاش کنید');
      } else {
        setErrMsg('ارتباط با سرور برقرار نشد لطفا مجدد تلاش کنید')
      }
    // else if (err.response?.status === 409) {
    //       setErrMsg('شماره موبایل قبل وارد شده است');
          
    //   }
      errRef.current.focus();
  }
 
  };

  return (
    <div className="containerLogin">
      <div className="contact-form">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

        {/* <img alt="" className="avatar" src="/assets/Untitled-1.svg"/> */}
        <h2>ورود</h2>
        <p>
          برای ورود به کندووان پلاس شماره تلفن همراه خود را وارد کنید تا کد
          تایید برای شما پیامک شود
        </p>

        <TextField
          style={{ direction: "ltr" }}
          onChange={handleChangenumber}
          className={classes.TextField}
          label="شماره موبایل"
          placeholder="+98 | "
          id="phoneNumber"
          name="phoneNumber"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          {...register("phoneNumber")}
          error={errors.phoneNumber ? true : false}
        />
        <Typography
          variant="inherit"
          color="textSecondary"
          style={{ color: "rgb( 227 156 0)" }}
        >
          {errors.phoneNumber?.message}
        </Typography>
        <Button
          variant="contained"
          className={classes.buttonLogin}
          onClick={handleSubmit(onSubmit)}
        >
          دریافت کد تایید
        </Button>

        {/* <input placeholder="Enter Email" type="email"/>
			            <input placeholder="Enter Password" type="password"/> <input type="submit" value="Sign in"/>
		            	<p><input type="checkbox"/>Remember Me</p> */}
      </div>
    </div>
  );
}

export default withRouter(Login);
