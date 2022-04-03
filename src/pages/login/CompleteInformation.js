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




import React, { useState } from "react";
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
import classnames from "classnames";

// styles
import useStyles from "./styles";
import "./styles.css"
// logo
import logo from "./logo.svg";
import google from "../../images/google.svg";
import { useParams ,useHistory} from "react-router";


import { useUserDispatch, loginUser } from "../../context/UserContext";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function CompleteInformation(props) {
  var classes = useStyles();
  const history=useHistory()

  // global
  var userDispatch = useUserDispatch();
  // const phoneRegExp = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
  const phoneRegExp = /9([0-3][0-9])-?[0-9]{3}-?[0-9]{4}/

  const validationSchema = yup.object().shape({


    Username:yup.string().required( 'لطفا نام کاربری خود را وارد کنید'),
    name:yup.string().required('لطفا نام خود را وارد کنید'),
    family:yup.string().required('لطفا نام خانوادگی خود را وارد کنید'),
    email: yup.string().email('لطفا ایمیل معتبر وارد کنید')

  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
    history.push("/login/step2")

  };
  // local



  return (

     <div className="containerLogin">
          <div className="contact-form">
	          	{/* <img alt="" className="avatar" src="/assets/Untitled-1.svg"/> */}
              <h2 >اطلاعات</h2>
              <p >اطلاعات شخصی خود را وارد کنید</p>
              
              <TextField
      
              style={{direction:"ltr"}}
                className={classes.TextField}
              label="نام کاربری"
                id="Username"
                name="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
                {...register('Username')}
                error={errors.phoneNumber ? true : false}
              />
              <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
                {errors.Username?.message}
              </Typography>

              <TextField
      
      style={{direction:"ltr"}}
        className={classes.TextField}
      label="نام"
        id="name"
        name="name"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
        {...register('name')}
        error={errors.phoneNumber ? true : false}
      />
      <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
        {errors.name?.message}
      </Typography>


      <TextField
      
      style={{direction:"ltr"}}
        className={classes.TextField}
      label="نام خانوادگی"
        id="family"
        name="family"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
        {...register('family')}
        error={errors.phoneNumber ? true : false}
      />
      <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
        {errors.family?.message}
      </Typography>

      <TextField
      
      style={{direction:"ltr"}}
        className={classes.TextField}
      label="ایمیل"
        id="email"
        name="email"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
        {...register('email')}
        error={errors.phoneNumber ? true : false}
      />
      <Typography variant="inherit" color="textSecondary" style={{color:"red"}}>
        {errors.email?.message}
      </Typography>
          <Button
              variant="contained"
              className={classes.buttonLogin}
              onClick={handleSubmit(onSubmit)}
            >
           ثبت اطلاعات      
         </Button>
         

	                {/* <input placeholder="Enter Email" type="email"/>
			            <input placeholder="Enter Password" type="password"/> <input type="submit" value="Sign in"/>
		            	<p><input type="checkbox"/>Remember Me</p> */}
	         
	        </div>
     </div>
    
  );
}

export default withRouter(CompleteInformation);
