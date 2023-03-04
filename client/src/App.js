import React, { useEffect, useState } from 'react';
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
import { Contacts, Landing, UserLogin, JobApplications, Skills } from './pages';
import WithSubnavigation from './components/NavigationBar';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [jobApplications, setJobApplications] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState([]);

  // Check user login
  useEffect(() => {
    const currentUser = localStorage.getItem('user');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  // Load Job Applications Data
  const loadJobApplications = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const response = await fetch(process.env.REACT_APP_BACKEND_ADDRESS + `/applications/${user.user_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.status === 200) {
      setJobApplications(data);
    } else {
      alert(`Failed to fetch job applications, status code = ${response.status}`);
    }
  };

  // Load Contacts Applications Data
  const loadContacts = async () => {
    const user = JSON.parse(localStorage.getItem('user'), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const response = await fetch(process.env.REACT_APP_BACKEND_ADDRESS + `/contacts/${user.user_id}`);
    const data = await response.json();
    if (response.status === 200) {
      setContacts(data);
    } else {
      alert(`Failed to fetch contacts, status code = ${response.status}`);
    }
  };


  // Load Skills Data
  const userData = JSON.parse(localStorage.getItem('user'));
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div>
          <WithSubnavigation
            user={user}
            setUser={setUser}
          />
          <Routes>
            <Route path='/'
              element={<Landing
                user={user}
              />}></Route>
            <Route path='/login'
              element={<UserLogin
                user={user}
                setUser={setUser}
              />}></Route>
            <Route path='/contacts'
              element={<Contacts
                loadContacts={loadContacts}
                contacts={contacts}
                setContacts={setContacts}
              />}></Route>
            <Route path='/applications'
              element={<JobApplications
                jobApplications={jobApplications}
                setJobApplications={setJobApplications}
                loadJobApplications={loadJobApplications}
              />}>
            </Route>
            <Route path='/skills'
              element={<Skills
              />}>
            </Route>
          </Routes>
        </div>
      </Router>

    </ChakraProvider>
  );
}

export default App;
