import './App.css';
import React from "react";




import { Route } from "react-router-dom";


function App() {
  return (
      <React.Fragment>
        
          <Route exact path="/" component={Buscador} />
    
      </React.Fragment>
  );
}

export default App;