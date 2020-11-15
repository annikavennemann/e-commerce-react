import RegisterForm from "./RegisterForm";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { useState, useEffect } from 'react'
import getUserData from './service/getUserData'
import getProductsData from './service/getProductsData'
import styled from 'styled-components/macro';




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

  function sendOrder(event) {
    event.preventDefault()
  }
  
  return (
    <AppStyled>
      <Header>{"<?= how to survive php ?>"} </Header>
      <MainGrid>
        
        {console.log(products)}
        {products.map(product => <ProductCard key={product.id} productDetails={product} /> )}
       
        <Button text={"zur Bestellung"} onSubmit={sendOrder}/>

        {/* <RegisterForm onSubmit={addUserProfile}/>
        <ul>
          {console.log(userData)}
          {userData.map(user => <li key={user.id}>{user.email}</li>

          )}
        </ul>
         */}
        </MainGrid>
    </AppStyled>
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
  padding: 20px 20px;
`

export default App;
