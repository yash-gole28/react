
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Effect1 from './components/Effect1';
import Effect2 from './components/Effect2';
import Effect3 from './components/Effect3';
import Effect4 from './components/Effect4';
import Product from './components/Product';
import Params from './components/Params';
import Mapping from './components/Mapping';
import DynamicStyle from './components/DynamicStyle';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element = {<NotFound/>}/>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/Profile' element = {<Profile />}/>
        <Route path='/Counter'element ={<Counter />}/>
        <Route path='/Effect1'element={<Effect1/>}/>
        <Route path='/Effect2'element={<Effect2/>}/>
        <Route path='/Effect3'element={<Effect3/>}/>
        <Route path='/Effect4'element={<Effect4/>}/>
        <Route path='/Params'element={<Params/>}/>
        <Route path='/Product/:id'element={<Product/>}/>
        <Route path='/Mapping' element={<Mapping names = {['yash','tejas','shreyas']}/>}/>
        <Route exact path='DynamicStyle' element={<DynamicStyle/>}/>
        <Route exact path='register' element={<Register/>}/>  
        <Route exact path= 'products' element={<Products/>}/>
      </Routes>
      {/* <h1>hello there</h1> */}
    </div>
  );
}

export default App;
