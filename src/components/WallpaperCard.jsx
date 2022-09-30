import React from 'react'
import { Typography, Card, CardContent, CardMedia } from "@mui/material";


const WallpaperCard = ( { 
  wallpaper : 
    { data : 
      { title,
        subreddit_name_prefixed,
        preview,
        url
    }
  } 
  }) => {
    let previewUrl = ''
    if(!preview || undefined){
      previewUrl = "https://img.icons8.com/ios-filled/50/000000/no-image.png"
    }else{
      if(!preview.images[0].resolutions[3]){
        previewUrl = preview.images[0].resolutions[2].url.replaceAll('amp;', '')
      }else if(!preview.images[0].resolutions[2]){
        previewUrl = preview.images[0].resolutions[1].url.replaceAll('amp;', '')
      }else{
        previewUrl = preview.images[0].resolutions[3].url.replaceAll('amp;', '')
      }
     }
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "200px", borderRadius: 0, backgroundColor: '#eadaf7'}} >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <CardMedia 
              component = "img"
              image = {previewUrl}
              alt = "title"
              sx={{ minWidth: '320px', minHeight: '420px', maxHeight: '420px'}} 
          />
        </a>
        <CardContent>
            <Typography  variant="subtitle1" fontWeight="bold" color="#000">
            <a target = "_blank" href = {url} rel="noopener noreferrer">{title.slice(0, 30)}...</a>
            </Typography>
            <Typography variant="subtitle2" color="gray">
                {subreddit_name_prefixed}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default WallpaperCard