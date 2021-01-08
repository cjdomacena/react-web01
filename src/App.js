import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router} from 'react-router-dom';
import SideBar from './Components/Sidebar/SideBar';
import './App.css';

function App() {
  return (
    <Router>
      <SideBar/>
      <Navbar></Navbar>
    </Router>
  );
}

export default App;
