import Header from "./components/header/Header";
import HomeScreen from './screens/homeScreen/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Sidebar from './components/sidebar/Sidebar';
import './_app.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__container border border-info">
        <Sidebar />
        <Container fluid className="app__main border border-warning">
          <HomeScreen/>
        </Container>
      </div>
    </div>
  );
}

export default App;
