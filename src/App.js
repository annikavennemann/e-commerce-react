import RegisterForm from "./RegisterForm";
import { useState, useEffect } from 'react'
import getUserData from './service/getUserData'


function App() {
  const [userData, setUserData] = useState([])

  useEffect(() => {
  getUserData().then(userData => setUserData(userData))
  }, [])

  function addUserProfile(journal) {
    setUserData([...userData, journal])
  }

  return (
    <>
      <RegisterForm onSubmit={addUserProfile}/>
    </>
  );
}

export default App;
