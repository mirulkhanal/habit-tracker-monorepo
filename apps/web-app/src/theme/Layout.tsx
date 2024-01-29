import { Outlet } from 'react-router-dom';
import { Navbar } from '@habit-dev/ui';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './defaults';

const Layout = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
