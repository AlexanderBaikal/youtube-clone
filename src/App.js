import Header from "./components/header/Header";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Sidebar from "./components/sidebar/Sidebar";
import "./_app.scss";
import { useState } from "react";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <div className="App">
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container  ">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main  ">
          {children}
        </Container>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen />;
        </Route>
        <Route path="/search">
          <h1>Search Results</h1>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
