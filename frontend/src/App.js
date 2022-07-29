
import "./App.css";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom"
import Navbar from "./components/Navbar";
import Add from "./components/add";
import Home from "./Screens/HomeScreen";
function App() {
  

  return (
    <div className="App">
      <Navbar/>
      
      <Router>
      
      <Switch>
        <Route exact  path="/">
        <Home/>
        </Route>
        <Route exact  path="/create">
        <Add/>
        </Route>
      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
