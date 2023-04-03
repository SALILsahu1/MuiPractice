import React from 'react'
import {Box,List,ListItem,ListItemButton,ListItemText,Switch} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
const Sidebar = () => {
  return (
    <Box flex={3} sx={{display:{xs:"none",sm:'block'}}}>
        <Box position='fixed'>
        <List >
          <ListItem>
          <ListItemButton LinkComponent="a" href='#home'>
          <ListItemIcon>
            <HomeOutlinedIcon/>
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton LinkComponent="a" href='#home'>
          <ListItemIcon>
            <ContactPageOutlinedIcon/>
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton LinkComponent="a" href='#home'>
          <ListItemIcon>
            <GroupsOutlinedIcon/>
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton LinkComponent="a" href='#home'>
          <ListItemIcon>
            <StorefrontOutlinedIcon/>
          </ListItemIcon>
          <ListItemText primary="MarketPlace" />
        </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton LinkComponent="a" href='#home'>
          <ListItemIcon>
            <PeopleAltOutlinedIcon/>
          </ListItemIcon>
          <ListItemText primary="Freinds" />
        </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton LinkComponent="a" href='#home'>
          <ListItemIcon>
            <HomeOutlinedIcon/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton LinkComponent="a" href='#home'>
          <ListItemIcon>
            <StorefrontOutlinedIcon/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton LinkComponent="a" href='#home'>
          <ListItemIcon>
            <ModeNightOutlinedIcon/>
          </ListItemIcon>
          <Switch  defaultChecked />
        </ListItemButton>
          </ListItem>
        </List>
        </Box>
    </Box>
  )
}

export default Sidebar
