import React from 'react'
import { Box, Stack } from '@mui/material'
import WallpaperCard from './WallpaperCard'

const Wallpaper = ( { wallpapers }) => {
    if(!wallpapers?.length) return 'Loading...'
  return (
    <Stack direction ="row" flexWrap="wrap" gap ={1.8} justifyContent = 'start'>
        {wallpapers.map((wallpaper, index) => (
            <Box key = {index}>
                <WallpaperCard wallpaper = {wallpaper}/>
            </Box>
        ))}
    </Stack>
  )
}

export default Wallpaper