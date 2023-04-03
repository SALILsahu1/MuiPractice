import React from 'react'
import './Feed.css'
import {Box} from '@mui/material';
import Posts from './Posts';
const Feed = () => {
  
  return (
    <Box  flex={5} p={2} >
          <Posts/>
    </Box>
  )
}

export default Feed



