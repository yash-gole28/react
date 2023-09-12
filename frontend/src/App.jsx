
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Profile from './components/Profile';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/Profile' element = {<Profile />}/>
        <Route path='/Counter'element ={<Counter />}/>
      </Routes>
      {/* <h1>hello there</h1> */}
    </div>
  );
}

export default App;
