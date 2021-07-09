import Header from "./components/header/Header";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Sidebar from "./components/sidebar/Sidebar";
import "./_app.scss";
import { useState } from "react";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
  const { accessToken, loading } = useSelector((state) => state.auth);
  const history = useHistory();
  
  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);

  return (
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
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
