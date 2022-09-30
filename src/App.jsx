// import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import './App.css'


const App = () => {
  return (
    <Box sx={{ backgroundColor: '#1C1F1F'}}>
        <Navbar />
        <Feed />
    </Box>
  )
}

export default App