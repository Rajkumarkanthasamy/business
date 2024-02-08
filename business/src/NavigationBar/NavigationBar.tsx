import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import NarutoProfile from "../../public/NarutoBlood.jpg"
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CommentIcon from '@mui/icons-material/Comment';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import './NavigationBar.css'


export default function NavigationBar() {
  return (
    <Paper sx={{ 
        width: "12vw",
         maxWidth: '100%',
          minHeight:"100vh",
            color:"#FFF",
            backgroundColor:"#000",
            borderTopRightRadius:"15px",
            borderBottomRightRadius:"15px",
            position: "fixed",
            top: "0px",
            left: "0px"

    }}>
    <Stack direction="row" display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{marginTop:"10px"}}>
      <Avatar alt="R" src="../../public/NarutoBlood.jpg"  />
    </Stack>
      <MenuList>
        {
          Navigationpages.map((pages)=>{
            return(
              <MenuItem className='MenuButton'>
              <ListItemIcon>
              {pages.Icon}
              </ListItemIcon>
              <ListItemText>{pages.name}</ListItemText>
            </MenuItem>
            )
          })
        }
        <Divider />
        <ListItemText sx={{paddingLeft:"5px"}}>SHORTCUTS</ListItemText>
        <MenuItem>
          <ListItemIcon>
            <AssignmentIcon fontSize="small" sx={{color:"#AAA"}}/>
          </ListItemIcon>
          <ListItemText>Tasks</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ReportProblemRoundedIcon fontSize="small" sx={{color:"#AAA"}}/>
          </ListItemIcon>
          <ListItemText>Reports</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}


const Navigationpages =[
  {
    name:"Dashboard",
    Icon:<DonutSmallIcon fontSize="small" sx={{color:"#AAA"}}/>,
  },
  {
    name:"Over View",
    Icon:<AnalyticsIcon fontSize="small" sx={{color:"#AAA"}}/>,
  },{
    name:"Charts",
    Icon:<CommentIcon fontSize="small" sx={{color:"#AAA"}}/>,
  },{
    name:"Team",
    Icon:<GroupsIcon fontSize="small" sx={{color:"#AAA"}}/>,
  },{
    name:"Setting",
    Icon:<SettingsIcon fontSize="small" sx={{color:"#AAA"}}/>,
  },
]