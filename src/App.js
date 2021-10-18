import './App.css';
import Header from './components/Shared/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/Shared/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Shared/Authentication/Login/Login';
import Signup from './components/Shared/Authentication/Signup/Signup';
import ServiceDetails from './components/Shared/Authentication/ServiceDetails/ServiceDetails';
import Specialists from './components/Shared/Specialists/Specialists';
import About from './components/Shared/About/About';

function App() {
  return (
    <div>
       
    <Router>
    <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       
       <Route path="/home">
         <Home></Home>
       </Route>

       <Route path="/specialists">
         <Specialists></Specialists>
       </Route>

       <Route path="/about">
         <About></About>
       </Route>

       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="/signup">
         <Signup></Signup>
       </Route>
       <Route path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </Route>
       <Route path="*">
         <NotFound></NotFound>
       </Route>
     </Switch>
   </Router>
 <Footer></Footer>
 </div>
  );
}

export default App;
