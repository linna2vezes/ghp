
import { Fragment } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';


function App() {
  return (
    <Fragment>
      <Routes>
      <Route path="/" element={ <Home />}>
      
      </Route>
      </Routes>


      </Fragment>
    
  );
}

export default App;
