import React, { useEffect, useState } from 'react'
import {
  ChakraProvider,
  // Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserLogin, Contacts } from './pages';
import WithSubnavigation from './components/NavigationBar';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div>
          <WithSubnavigation />
          <Routes>
            <Route path='/UserLogin' element={<UserLogin />}></Route>
            <Route path='/Contacts' element={<Contacts />}></Route>
          </Routes>
        </div>
      </Router>
      {/* {(typeof backendData.testData === 'undefined') ? (
          <p>Loading...</p>
        ): (
          backendData.testData.map((test, i) => (
            <p key={i}>{test}</p>
          ))
        )} */}
    </ChakraProvider>
  );
}

export default App;
