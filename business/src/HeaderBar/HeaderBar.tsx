import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const styles={
  BoxContiner:{ backgroundColor:"#000", height: '6.5vh', width:"95%", borderRadius:"15px",
   display:"flex", justifyContent:"space-between", alignItems:"center", color:"#FFF", padding:"10px", position:"fixed", top:"10px", left:"35px" }
}

function HeaderBar() {
  return (
   <>
    <Box  sx={styles.BoxContiner} >
        <div>
        <Typography sx={{fontSize:"1.4vw"}} >header</Typography>
        </div>
        <div style={{display:"flex"}}>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, height:30 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
        <IconButton><EmailIcon fontSize="small" sx={{color:"white"}}/></IconButton>
        <IconButton><NotificationsIcon fontSize="small" sx={{color:"white"}} /></IconButton>
        <IconButton><HelpOutlineIcon fontSize="small" sx={{color:"white"}} /></IconButton>
        
        </div>
      </Box>
   </>
  )
}

export default HeaderBar
