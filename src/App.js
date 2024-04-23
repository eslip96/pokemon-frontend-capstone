import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/auth/Login";
import Pokemon from "./components/pages/Pokemon";
import Pokemons from "./components/pages/Pokemons";
import Team from "./components/pages/Team";
import Users from "./components/pages/Users";
import NavBar from "./components/pages/navigation/Nav-bar";
import Footer from "./components/pages/navigation/Footer";
import Terms from "./components/pages/Terms";
import About from "./components/pages/About";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/team" component={Team} />
          <Route path="/users" component={Users} />
          <Route path="/terms" component={Terms} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/" component={Footer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
