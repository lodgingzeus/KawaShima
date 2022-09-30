import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ( {selectedCategory, setSelectedCategory} ) => {
  return (
    <Stack
    direction = "row"
    backgroundColor = "#1c1f1f"
    borderRight = "0.5px solid rgba(223, 115, 242, 0.826)"
    sx ={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '100vh'},
        flexDirection: { md: 'column'}
     }}
    >
        <h2>Sub<span className="sub">Reddits</span></h2>
        {
          categories.map(category =>(
            <button
            key = {category.name}
            className = "category-btn"
            style = {{
              background: category.name === selectedCategory && '#f21d84'
            }}
            onClick={() => { setSelectedCategory(category.name)}}
            >{category.name}</button>
          ))
        }
        
    </Stack>
  )
}

export default Sidebar