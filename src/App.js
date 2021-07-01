import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";
import Password from "./pages/Password";
import BuyBbs from "./pages/BuyBbs";
import Categories from "./pages/Categories";
import EditCategoriesById from "./pages/EditCategoriesById";

const App = () => {
  return (
    <div className="App">
      <Router>
          <NavBar />
            <div className="container">
              <Switch>
                  <Route path='/' exact component={Homepage} />
                  <Route exact path='/auth/connexion' component={Login} />
                  <Route exact path='/auth/inscription' component={Register} />
                  <Route path='/mon-compte' component={MyAccount} />
                  <Route path='/changer-mot-de-passe' component={Password} />
                  <Route path='/acheter-des-bbs' component={BuyBbs} />
                  <Route exact path='/categories' component={Categories} />
                  <Route exact path="/categories/:id" component={EditCategoriesById} />
              </Switch>
            </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
