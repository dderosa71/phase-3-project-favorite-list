import './App.css';
import Header from "./Header.js"
import Places from "./Places.js"
import Attractions from "./Attractions.js"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import react from 'react';

function App() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch('http://localhost:9292/locations')
      .then(resp => resp.json())
      .then(json => {
        console.log("true")
        setPlaces(json)
        setLoading(true)

      
      })
  },[]
  )

  const switchJSX = (  <Switch>
   < Header/>

    <Route exact path="/location/:id/attractions/">
      <Attractions places={places}/>
    </Route>
  
    <Route path="/">
      <Places places={places} setPlaces={setPlaces}/>
    </Route>
  
  
  </Switch>
  )

  return(
 <>
 <BrowserRouter>
  
    {loading ? <ClimbingBoxLoader/> : switchJSX}

 </BrowserRouter>
 </>
  );
}

export default App;
