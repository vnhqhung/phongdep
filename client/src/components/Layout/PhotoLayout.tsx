import { Box, Toolbar } from '@mui/material';
import Dashboard from 'features/photo/dashboard';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Sidebar } from '../Common';

export interface PhotoLayoutProps {}

export function PhotoLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Switch>
          <Route path='/photo/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
