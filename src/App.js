import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Registration from './component/Registration';
import Login from './component/Login';
import FormMessage from './component/FormMessage';
import React, { useState } from "react";

function App() {
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message : message,
      type:type
    }
    );
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  return (
   <>
    <Router>
    <Navbar/>
      <FormMessage alert={alert} />
      
        <Switch>
     
      
      <Route exact path="/login" > 
      <Login  showAlert={showAlert} />
      </Route>
      <Route exact path="/registration">
      <Registration showAlert={showAlert} />
      </Route> 
   
        </Switch>
      </Router>
   </>
  );
}

export default App;
