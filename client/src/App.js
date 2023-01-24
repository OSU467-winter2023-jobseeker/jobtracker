import React, {useEffect, useState} from 'react'

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
    <div>

      {(typeof backendData.testData === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.testData.map((test, i) => (
          <p key={i}>{test}</p>
        ))
      )}

    </div>
  )
}

export default App;
