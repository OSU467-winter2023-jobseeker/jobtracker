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
import { Contacts, Landing, UserLogin, JobApplications } from './pages';
import WithSubnavigation from './components/NavigationBar';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [jobApplications, setJobApplications] = useState([]);

  // Load Job Applications Data
  const loadJobApplications = async () => {
    const response = await fetch("/applications");
    const data = await response.json();
    if (response.status === 200) {
      setJobApplications(data);
    } else {
      alert(`Failed to fetch job applications, status code = ${response.status}`);
    }
  };

  // Load Contacts Applications Data


  // Load Skills Data

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div>
          <WithSubnavigation />
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/UserLogin' element={<UserLogin />}></Route>
            <Route path='/Contacts' element={<Contacts />}></Route>
            <Route path='/JobApplications'
              element={<JobApplications
                jobApplications={jobApplications}
                setJobApplications={setJobApplications}
                loadJobApplications={loadJobApplications}
              />}>
            </Route>
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
