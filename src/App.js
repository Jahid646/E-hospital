import "./App.css";

import Header from "./components/Shared/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/Shared/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Shared/Authentication/Login/Login";
import Signup from "./components/Shared/Authentication/Signup/Signup";
import Specialists from "./components/Shared/Specialists/Specialists";
import About from "./components/Shared/About/About";
import ServiceDetails from "./components/Shared/ServiceDetails/ServiceDetails";
import PrivateRoute from "./Privateroute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/specialists">
            <Specialists></Specialists>
          </PrivateRoute>

          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
      </AuthProvider>
  );
}

export default App;
