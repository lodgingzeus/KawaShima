import { useEffect, useState } from 'react'
import { Stack, Box } from '@mui/material'
import Wallpaper from './Wallpaper'
import Sidebar from './Sidebar'

const Feed = () => {
  const [ selectedCategory, setSelectedCategory ] = useState("AnimeWallpaper")
  const [ walls, setWalls ] = useState([])

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${selectedCategory}/new/.json`)
    .then(res => {
        if(res.ok){
            return res.json()
        }
        else{
            console.log("Error fetching Data")
        }
    })
    .then(data =>{
        setWalls(data.data.children)
    })
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"}}}>
      <Box sx={{ height: { sx: "auto", md: '100vh'}, color: 'white'}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory = {setSelectedCategory}/>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '100vh',}}>

          <Wallpaper wallpapers = {walls}/>
      </Box>
    </Stack>
  )
}

export default Feed