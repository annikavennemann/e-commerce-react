import RegisterForm from "./components/RegisterForm";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "./Header";
import { useState, useEffect } from 'react'
import getUserData from './service/getUserData'
import getProductsData from './service/getProductsData'
import styled from 'styled-components/macro';
import Filter from "./components/Filter";




function App() {
  const [userData, setUserData] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
  getUserData().then(userData => setUserData(userData))
  }, [])

  useEffect(() => {
    getProductsData()
    .then(function(data) {
      console.log(data)
      setProducts(data)
    })
  },[])

  function addUserProfile(userProfile) {
    setUserData([...userData, userProfile])
    fetch('http://e-commerce.local/api/create-user', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(userProfile)
      }).then(response => response.json()
      );

  }

  
  
  return (
    <Router>
      <AppStyled>
        <Header />
        <MainGrid>
        <Switch>
          <Route path="/order">
            <RegisterForm onSubmit={addUserProfile}/>
          </Route>
          <Route path="/">
            <Filter products={products} />
          </Route>
        </Switch>
          
          
          </MainGrid>
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  max-width: 600px;
  position: relative;
  width: 100%;
  height: 100%;display: grid;
  grid-template-rows: 70px auto;
  max-width: 600px;
  position: fixed;
  left: 0;
  top: 0;

`

const MainGrid = styled.main`
  overflow-y: scroll;
  display: grid;
  align-content: start;
  gap: 20px;
  padding: 0;
`

export default App;
