
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

function App() {
  return (
    <Router>
      <ToastContainer />
      <h1 className='text-center bg-primary text-white p-5 mb-0'>Contact Application using React Redux</h1>

      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add">
          <AddContact />
        </Route>
        <Route exact path="/edit/:id">
          <EditContact />
        </Route>
        {/* <Route exact path='/edit/:id' component={Edit}/> */}
      </Switch>
    </Router>


  );
}

export default App;
