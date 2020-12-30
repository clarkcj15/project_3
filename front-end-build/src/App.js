import './App.css';
import {Route, Link, Switch} from 'react-router-dom';

import Home from './Components/Home/Home'
import Dogs from './Components/Dogs/Dogs';
import UserDogs from './Components/userdogs/UserDogs';
// import DogRateForm from './Components/DogRateForm/DogRateForm';


function App() {
  return (
    <div className="App">
      {/* <h1>Tinder Meets WeRateDogs Meets Instagram</h1> */}
      <nav className="nav">
        <Link to="/doggos"><h3>Home</h3></Link>
        <Link to="/ratedogs"> <h3>Rate Our Dogs </h3></Link>
        <Link to="/userdogs"><h3>Rate Your Own Dog!</h3></Link>
      </nav>
      <Switch className="switch">
      <Route exact path="/doggos" component={Home} />
      <Route path="/ratedogs" component={Dogs} />
      <Route path="/userdogs" component={UserDogs} />
      {/* <DogRateForm/> */}
      </Switch>
      

    </div>
  );
}

export default App;