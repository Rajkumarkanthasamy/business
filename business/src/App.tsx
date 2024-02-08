import React,{useEffect, useState} from 'react';
import { Routes, Route,  } from 'react-router-dom'; // Import BrowserRouter as Router
import LoginPage from './LoginPage/LoginPage';
import SignUp from './SignUpPage/Signup';
import PageNotFound from './PageNotFound/PageNotFound';
import { BrowserRouter } from 'react-router-dom';
import Dasboard from './Dashboard/Dashboard';
import NavigationBar from './NavigationBar/NavigationBar';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import NavigationIconBar from './NavigationBar/NavigationIconbar';
function App() {
  const [screenSize, setscreenSize] = useState({navidationbarSize:"12vw", mainviewPageSize:"88vw", naviBarType:false})
  
  const result = window.matchMedia("(max-width: 1400px)");
  sessionStorage.getItem("userlogin")
  useEffect(()=>{
 if (result.matches) {
   // alert(result.matches)
    setscreenSize({navidationbarSize:"4vw", mainviewPageSize:"96vw", naviBarType:true})
  }else{
    setscreenSize({navidationbarSize:"12vw", mainviewPageSize:"88vw", naviBarType:false})
  }
  },[result])
  
  // if (result.matches) {
  //  // alert(result.matches)
  //   setscreenSize({navidationbarSize:"4vw", mainviewPageSize:"96vw", naviBarType:false})
  // }else{
  //   setscreenSize({navidationbarSize:"12vw", mainviewPageSize:"88vw", naviBarType:false})
  // }
  return (

  <>
  <Paper  sx={{display:"flex", minWidth:"100vw", backgroundColor:"#404040", borderRadius:"none"}}>
    <div style={{width:`${screenSize.navidationbarSize}`, display:sessionStorage.getItem("userlogin") ? "block" : "none" }}>
      {screenSize.naviBarType ? <NavigationIconBar/> : <NavigationBar/> }     
  </div>
  <div style={{width:`${screenSize.mainviewPageSize}`}}>
    <BrowserRouter>
    <Routes> {/* Use Router instead of BrowserRouter */}   
        {/* Define your routes */}
        <Route  path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} /> 
        <Route path='/dashboard' element={<Dasboard/>}></Route>
        <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>
    </div>
    </Paper>
    </>
  );
}

export default App;
