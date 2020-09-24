import React, { createContext, useState }  from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import NoMatch from './Components/NoMatch/NoMatch';
import Details from './Components/Details/Details';
import "firebase/auth";
import Auth from './Components/Auth/Auth';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext()

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [selectedPlace,setSelectedPlace] = useState({})

  return (
    <UserContext.Provider value ={{loggedInUser, setLoggedInUser,selectedPlace,setSelectedPlace}}>
      <Router>
        <Switch>
          <Route path="/news">
           <Banner></Banner>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/login">
              <Auth></Auth>
          </Route>
          <Route exact path="/">
            <Banner></Banner>
          </Route>
          <Route path="/place/:placeId">
            <Details></Details>
          </Route>
          <Route path="*">
              <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
