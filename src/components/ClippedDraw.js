import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const drawerWidth = 240;

export function ClippedDrawer(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {props.pages.map(item => (
              <ListItem button key={item.title} onClick={() => props.pageClick(item.page)}>
                <ListItemIcon>
                  {item.icon()}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[['About', () => (<InfoIcon/>)], ['Settings', () =>  (<SettingsIcon/>)], ['Contact', () =>  (<ContactSupportIcon />)]].map((item) => (
              <ListItem button key={item[0]}>
                <ListItemIcon>
                    {item[1]()}
                </ListItemIcon>
                <ListItemText primary={item[0]} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {props.page}
      </Box>
    </Box>
  );
}