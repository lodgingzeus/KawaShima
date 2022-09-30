import React from 'react'
import { Stack } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiDiscord } from "react-icons/si";

const Navbar = () => {
  return (
    <Stack direction = 'row' sx={{ position: 'sticky'}}
    alignItems = "center"
    p = {1}
    backgroundColor = "#1c1f1f"
    gap = "10px"
    justifyContent = "space-between"
    >
        
        <Stack
        direction = "row"
        alignItems = "center"
        justifyContent = "center"
        >
        <a href = "/">
        <img src="https://img.icons8.com/color/48/000000/redux.png" height={40} alt="reduxIcon"/>
        </a>
        <h3>Kawa<span className="sub">Shima</span></h3>
        </Stack>

        <Stack direction = 'row'
        alignItems = "center"
        p = {1}
        backgroundColor = "#1c1f1f"
        justifyContent = "end"
        gap = "20px"
        >
        <a href = "https://www.instagram.com/bhagatd585/" target="_blank" rel="noopener noreferrer"><InstagramIcon sx={{ color: 'white'}}/></a>
        <a href = "https://github.com/lodgingzeus" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: 'white'}}/></a>
        <a href = "https://t.me/lodgingzeus" target="_blank" rel="noopener noreferrer"><TelegramIcon sx={{ color: 'white'}}/></a>
        <a href = "https://discord.com/users/561817989242945546" target="_blank" rel="noopener noreferrer">
        <SiDiscord style={{ color: 'white'}}/>
        </a>
        </Stack>
        
        
        
    </Stack>
  )
}

export default Navbar