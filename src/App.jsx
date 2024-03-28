import { RouterProvider, Route, Outlet, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useReducer } from "react"
import PetParent from './pages/Petparent';
import PetSitter from './pages/Petsitter';
import Mainpage from './pages/Mainpage';
import AppDrawer from './components/Navbar/drawer';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styled/Theme';
import { GlobalContext } from './components/utils/globalStateContext';
import globalReducer from './components/utils/globalReducer';
import { NavProvider } from './components/Navbar/NavContext';
import Footer from './components/Home/Footer';


function App() {
  const [store, dispatch] = useReducer(globalReducer)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Nav />} errorElement={<NotFound />}>
        <Route path='/' element={<Mainpage />} />
        <Route path='/petsitter' element={<PetSitter />} />
        <Route path='/petparent' element={<PetParent />} />
      </Route>)
  )

  return (
    <div className='App'>
        <ThemeProvider theme={theme}>
          <GlobalContext.Provider value={{ store, dispatch }}>
            <RouterProvider router={router} />
          </GlobalContext.Provider>
        </ThemeProvider >
    </div>
  );
}

function Nav() {
  return (
    <div className="page-wrapper">
      <NavProvider>
        <Navbar />
        <AppDrawer />
        <Outlet />
        <Footer sx={{
          position: 'absolute',
          bottom: 0,
          zIndex: 99,
          flexShrink: 0,
        }} />
      </NavProvider>
    </div>
  )
}

export default App;
