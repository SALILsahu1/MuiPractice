import React from 'react'
import './Rightbar.css'
import {Box,Avatar,AvatarGroup, Typography,ImageList,ImageListItem, List,ListItem,ListItemAvatar,ListItemText,Divider} from '@mui/material';
import { display } from '@mui/system';
const Rightbar = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },  ];
  const friendsList=[
    {img:'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {img:'https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {img:'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {img:'https://images.pexels.com/photos/2531156/pexels-photo-2531156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {img:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {img:'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {img:'https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {img:'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {img:'https://images.pexels.com/photos/2531156/pexels-photo-2531156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {img:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
  ]
  const listData=[
    {img:'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',title:'Brunch this weekend?',name:'Ali Connors',desc:`I'll be in your neighborhood doing errands this…`},
    {img:'https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',title:'to Scott, Alex, Jennifer',name:'Summer BBQ',desc:`Wish I could come, but I'm out of town this…`},
    {img:'https://images.pexels.com/photos/1381558/pexels-photo-1381558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',title:' Sandra Adams',name:'Oui Oui',desc:`Do you have Paris recommendations? Have you ever…`}
  ]
  return (
    <Box  flex={4} sx={{display:{xs:"none",sm:'block'}}}>
      <Box position='fixed'>
        <Typography variant='h6' fontWeight={100}>Online friends</Typography>
      <AvatarGroup max={display==='md' ? 4 :7} >
        {
          friendsList.map((item,index)=>{
            return(
              <div className='avatargroup'><Avatar alt="Remy Sharp" src={item.img} /></div>
            )
          })
        }
      </AvatarGroup>
      <Typography variant='h6' fontWeight={100}>New Photos</Typography>
      <ImageList sx={{ width: 500, height: 100,gap:5 }} cols={3} rowHeight={100}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography variant='h6' fontWeight={100}>Latest Conversations</Typography>
   {
    listData.map((item,index)=>{
      return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={item.img} />
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {item.name}
                </Typography>
                {`-${item.desc}`}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        </List>
      )
    })
   }
      </Box>
    </Box>
  )
}

export default Rightbar
