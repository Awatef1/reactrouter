import React from 'react'
import './App.css'
import Page from './Components/Page';
import  Trailer from './Components/Trailer';
import {BrowserRouter, Route, Switch} from "react-router-dom"





function App() {
  

  return (
    
     
     <BrowserRouter>
  <Switch>
    <div>
          <Route exact path="/"  component={Page} />
          <Route path="/Trailer/:id" component={Trailer} />

    </div>
        </Switch>
        </BrowserRouter>
     
    
     
  );
}

export default App;