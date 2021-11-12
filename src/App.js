import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Product from "./Product"

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/">
            <Header />
            <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;