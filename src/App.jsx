import { useEffect, useState } from 'react'

import './App.css'
import useWindowDimensions from './hooks/windowDimensions';

const App = () => {
  const screenWidth = useWindowDimensions()?.width;
  const largeScreenWidth = 768;

  return (
    <>
      {/* RENDER MOBILE COMPONENTS HERE */}
      {screenWidth < largeScreenWidth ? (
        <div>
          <h1>Mobile</h1>
        </div>
      ) : null}

      {/* RENDER DESKTOP COMPONENTS HERE  */}
      {screenWidth < largeScreenWidth ? null : (
        <div>
          <h1>Desktop</h1>
        </div>
      )}
    </>
  );
};


export default App

