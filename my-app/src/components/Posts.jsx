import React from 'react'
import {Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,Typography,Checkbox} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
const Posts=()=> {
    const data=[ 
        {
            title:'alexendra',
            date:'September 14, 2016',
            img:'https://images.pexels.com/photos/1381558/pexels-photo-1381558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            avatar:'q'
        },
        {
            title:'holi',
            date:'September 14, 2016',
            img:'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            avatar:'s'
        },
        {
            title:'model',
            date:'november 14, 2019',
            img:'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            avatar:'o'
        },
        {
            title:'nature',
            date:'September 14, 2016',
            img:'https://images.pexels.com/photos/2635390/pexels-photo-2635390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            avatar:'h'
        },{
            title:'hundayi',
            date:'September 11, 2016',
            img:'https://images.pexels.com/photos/3776445/pexels-photo-3776445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            avatar:'k'
        }
    ]
  return (
    <div>
        {
            data.map((item,index)=>{
                return(
                    <Card sx={{marginTop: "10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader={item.date}
      />
      <CardMedia
        component="img"
        height="20%"
        image={item.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{color:'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>
    </Card>
                )
            })
        }
    </div>
  )
}

export default Posts
