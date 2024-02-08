import React from 'react'
import styled from 'styled-components'
import "./LoginPage.css"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Root = styled.div`
min-height:100vh,
display:flex,
background-color: #000,
`
function LoginPage() {
 const navigation = useNavigate()
  return (
   <React.Fragment>
    <div className='divcontiner'>
        <Container maxWidth="xl">
            <div className='logincontiner' >
                   <div className='loginLeft'>
                        <div className='loginLeftdiv'>
                        <p className='loginTextHeader'>Don't have an <br/>account ?</p>
                        <p className='loginText'>
                            Register to access all the features of our service.<br/>
                            it's free !
                        </p>
                        <div className='loginLeftIcons'>
                        <FacebookIcon fontSize="small" sx={{color:"#FFF" }}/>
                        <TwitterIcon fontSize="small" sx={{color:"#FFF" }}/>
                        <InstagramIcon fontSize="small" sx={{color:"#FFF" }}/>
                        <GoogleIcon fontSize="small" sx={{color:"#FFF" }}/>

                        </div>
                        </div>
                   </div>
                   <div className='loginRight'>
                        <div className='loginInputElements'>
                        <p className='loginTextHeader'>Login</p>
                            <p className='loginText'>Email</p>
                            <input type='email' className='inputField'/>
                            <p className='loginText'>Password</p>
                            <input type='password' className='inputField' id="checkboxlable"/>
                            <br/>
                            <div className='loginshowpassworddiv'>
                             <input type='checkbox' id="checkboxlable" style={{border:"none", outline:"none"}} />
                             <label className='loginText'> show password</label>
                            </div>
                            <br/>
                            <button className='loginButton'  onClick={()=>{sessionStorage.setItem("userlogin", "true"); navigation("/dashboard")}}>Login</button>
                            <br/><br/>
                            <a className='loginText' href='/signup'>Don't have an account ?</a>
                            
                        </div>
                   </div>

            </div>
        </Container> 
    </div>
   </React.Fragment>
  )
}

export default LoginPage