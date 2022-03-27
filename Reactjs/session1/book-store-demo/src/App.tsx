import { ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./assets/css/style.css"
import MainNavigation from './components/MainNavigation';
import Login from './pages/login';
import Register from './pages/register';
import { theme } from './utils/theme';

const App: React.FC = () =>
{
    return(
      <ThemeProvider  theme={theme}>
      <Typography variant='h4'>React application</Typography>
      <React.Suspense fallback={<></>}>

       <BrowserRouter> 

              <MainNavigation /> 

       </BrowserRouter> 

      </React.Suspense> 
      </ThemeProvider>
    );

}

export default App;
