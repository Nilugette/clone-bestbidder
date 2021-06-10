import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Switch>
              <Route path='/' exact component={Homepage} />
              <Route path='/auth/connexion' component={Login} />
              <Route path='/auth/inscription' component={Register} />
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
