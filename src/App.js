import './App.css';
import Header from './components/Shared/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/Shared/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div>
       
    <Router>
    <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
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
