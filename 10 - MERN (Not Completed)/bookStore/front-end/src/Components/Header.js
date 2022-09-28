import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:'gray'}}position='sticky'>
          <Toolbar>

          <Typography>book store</Typography>

          <Tabs sx={{m: 'auto'}}textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=> setValue(val)}>
            <Tab LinkComponent = {NavLink} to = '/add' label="add Product"/>
            <Tab LinkComponent = {NavLink} to = '/' label="Books"/>
            <Tab LinkComponent = {NavLink} to = '/about' label="About"/>
          </Tabs>

          </Toolbar>
          
    
        </AppBar>
    </div>
  )
}

export default Header