import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
//screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

//Components
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
 
    </Router>
  );
}

export default App;
