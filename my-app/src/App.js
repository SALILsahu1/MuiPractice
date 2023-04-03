import React from 'react'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import {Box, Stack,createTheme} from '@mui/material';
import Navbar from './components/Navbar';
import {ThemeProvider} from '@mui/material/styles';
const App = () => {
  // const [mode,setMode]=useState('dark')
  const darkTheme=createTheme({
    palette:{
      mode:'dark'
    }
  })
  return (
<ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
    <Stack direction='row' spacing={2}>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </Stack>
    </Box>
</ThemeProvider>
  )
}

export default App
