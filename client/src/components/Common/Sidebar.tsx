import { Dashboard, ListAlt } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const drawerWidth = 200;

const Link = styled(NavLink)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  '&.active > div': {
    backgroundColor: '#b6b6b6',
  },
}));

export function Sidebar() {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <Link to='/photo/dashboard'>
            <ListItem button key='Dashboard'>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItem>
          </Link>
          <Link to='/photo/checklist'>
            <ListItem button key='Photo'>
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText primary='Photo' />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button key='Note'>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary='Note' />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
