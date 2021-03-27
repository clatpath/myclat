import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Screens/Home/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Sidebar />
      <div className="Pages">
        <Route path="/signup" component={Signup} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/" component={Home} exact/>

      </div>
      </Router>
    </>
  );
}

export default App;
