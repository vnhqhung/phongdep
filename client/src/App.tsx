import { Theme } from '@mui/material/styles';
import { NotFound, PrivateRoute } from 'components/Common';
import { PhotoLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <PrivateRoute path='/photo'>
        <PhotoLayout />
      </PrivateRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
