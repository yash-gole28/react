
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/Login' element = {<Login/>}/>
      </Routes>
      {/* <h1>hello there</h1> */}
    </div>
  );
}

export default App;
