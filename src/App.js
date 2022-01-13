import './App.css';
import Form from "./componentsForm/form"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./componentsHome/Home"
import {db, auth} from "./Api"
import React, {useState, useEffect} from 'react';
import FormularioCadastro from "./componentsForm/form"

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if(user){
        setUser(user.displayName)
      }
    })
  })
  console.log(user)

  return (
      <Router>
        <Switch>

          <Route exact path="/">
            <FormularioCadastro setAoEnviar={0} user={user} setUser={setUser}/>
          </Route>

          <Route path="/home">

            {
              user?
              <Home user={user} setUser={setUser}/>
              :
              "Crie uma conta ou se logue para ter acesso a esta rota"
            }
          </Route>


        </Switch>   
    </Router>
  );
}

export default App;
