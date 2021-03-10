import React, {} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import PostDetail from './Components/PostDetail/PostDetail';


function App() {
  
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/post/:id">
               <PostDetail></PostDetail>
            </Route>
            
         </Switch>
       </div>
     </Router>

    </div>
   
  );
}

export default App;
