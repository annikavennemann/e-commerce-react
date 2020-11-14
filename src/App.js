import RegisterForm from "./RegisterForm";
import { useState, useEffect } from 'react'
import getUserData from './service/getUserData'


function App() {
  const [userData, setUserData] = useState([])

  useEffect(() => {
  getUserData().then(userData => setUserData(userData))
  }, [])

  function addUserProfile(userProfile) {
    setUserData([...userData, userProfile])
    
  }

  return (
    <>
      <RegisterForm onSubmit={addUserProfile}/>
      <ul>
        {console.log(userData)}
        {userData.map(user => <li key={user.id}>{user.email}</li>

        )}
      </ul>
    </>
  );
}

export default App;
