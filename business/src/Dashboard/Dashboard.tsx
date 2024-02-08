import React from 'react'
import "./DashboardCSS.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Height } from '@mui/icons-material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function Dasboard() {

  const styles={
    BoxContiner:{ backgroundColor:"#00000055", height: '6.5vh', width:"95%", borderRadius:"5px",
     display:"flex", justifyContent:"space-between", alignItems:"center", color:"#FFF", padding:"10px" }
  }
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className='continer'>

      <Box  sx={styles.BoxContiner} >
        <div>
        <Typography sx={{fontSize:"1.4vw"}} >Dashboard</Typography>
        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "80%", height:"4.5vh", borderRadius:"5px", backgroundColor:"#AAA" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
        <IconButton><EmailIcon fontSize="small" sx={{color:"white"}}/></IconButton>
        <IconButton><NotificationsIcon fontSize="small" sx={{color:"white"}} /></IconButton>
        <IconButton><HelpOutlineIcon fontSize="small" sx={{color:"white"}} /></IconButton>
        
        </div>
      </Box>
      <br/>
      <Box sx={{ flexGrow: 1 , width:"95%"}}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item style={{backgroundImage:"linear-gradient(to right, #f4a512, #f2d319)"}}>
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
              <Typography variant='h5'>22</Typography>
              <Typography variant='h5'>Users</Typography>

            </div>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item style={{backgroundImage:"linear-gradient(to right, #515ee0, #6f6eb2)"}}>Template</Item>
        </Grid>
        <Grid item xs={3}>
          <Item style={{backgroundImage:"linear-gradient(to right, #e54e8b, #e44cc4)"}}>Template</Item>
        </Grid>
        <Grid item xs={3}>
          <Item style={{backgroundImage:"linear-gradient(to right, #1fadbb, #7484c0)"}}>Template</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Template</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Template</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Template</Item>
        </Grid>
        <Grid item xs={8}>
          <Bigcontiner>Template</Bigcontiner>
        </Grid>
        <Grid item xs={4}>
          <Item>Template</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Template</Item>
        </Grid>
        <Grid item xs={8}>
          <Bigcontiner>Template</Bigcontiner>
        </Grid>
        <Grid item xs={6}>
          <Bigcontiner>Template</Bigcontiner>
        </Grid>
        <Grid item xs={6}>
          <Bigcontiner>Template</Bigcontiner>
        </Grid>
        <Grid item xs={6}>
          <Bigcontiner>Template</Bigcontiner>
        </Grid>
        <Grid item xs={6}>
          <Bigcontiner>Template</Bigcontiner>
        </Grid>
        <Grid item xs={8}>
          <Bigcontiner>Template</Bigcontiner>
        </Grid>
        <Grid item xs={4}>
          <Item>Template</Item>
        </Grid> 

      </Grid>
    </Box>
      </Grid>
    </>
  )
}

export default Dasboard;

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "#FFF",
  backgroundColor:"#00000055",
  height:"100px",
}));

const Bigcontiner = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "#FFF",
  backgroundColor:"#00000055",
  height:"100px"
}));