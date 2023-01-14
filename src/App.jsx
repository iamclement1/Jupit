import { useEffect, useState } from 'react'

import './App.css'
import useWindowDimensions from './hooks/windowDimensions';
import MobileIndex from './pages/Mobile/MobileIndex';
import DesktopIndex from './pages/Desktop/DesktopIndex';

const App = () => {
  const screenWidth = useWindowDimensions()?.width;
  const largeScreenWidth = 768;

  return (
    <div className='font-poppins body-font'>
      {/* RENDER MOBILE COMPONENTS HERE */}
      {screenWidth < largeScreenWidth ? (
        <div>
          <MobileIndex />
        </div>
      ) : null}

      {/* RENDER DESKTOP COMPONENTS HERE  */}
      {screenWidth < largeScreenWidth ? null : (
        <div>
          <DesktopIndex />
        </div>
      )}
    </div>
  );
};


export default App

