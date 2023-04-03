import React, { useState } from 'react'
import { AppBar,Toolbar, Typography,InputBase,Badge,Avatar,Menu,MenuItem} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Navbar.css'
const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <AppBar position='sticky' >
      <Toolbar className='navbarContainer'>
        <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>LAMA DEV</Typography>
        <PetsIcon sx={{display:{xs:'block',sm:'none'}}}/>
        <div className='searchBar'><InputBase placeholder='Search...'/></div>
        <div className='iconContainer' sx={{display:{xs:'flex',sm:'none'}}}>
        <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={4} color="primary">
            <NotificationsIcon color="action" />
        </Badge>
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='avatar' onClick={()=>setOpen(true)} />
        </div>
        {/* <div className='iconContainer2' sx={{display:{xs:'block',sm:'none'}}}>
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='avatar'/>
        <Typography variant='h6'>Curran</Typography>
        </div> */}
         <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
