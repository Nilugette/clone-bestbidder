import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Switch>
              <Route path='/' exact component={Homepage} />
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
