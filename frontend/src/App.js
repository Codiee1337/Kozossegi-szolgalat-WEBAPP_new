import Login from "./Components/Login";
import Register from "./Components/Register"
import Profile from "./Components/Profile"
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Components/Home"
import axios from "axios"



function App() {
  axios.defaults.baseURL = 'http://46.251.6.24:3000';

  return (
    <BrowserRouter>
      <Route exact path="/profile" component={Profile}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/" component={Home}></Route>
    </BrowserRouter>
  )
}

export default App;