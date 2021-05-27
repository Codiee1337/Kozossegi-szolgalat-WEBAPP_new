import classes from "./App.module.css"
import {Container} from "@material-ui/core"
import Login from "./Components/Login";
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Components/Home"
import axios from "axios"
import { useSelector } from "react-redux";

function App() {
  axios.defaults.baseURL = "http://46.251.6.24:3000"
  
  return (
    <BrowserRouter>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/" component={Home}></Route>
    </BrowserRouter>
  )
}

export default App;