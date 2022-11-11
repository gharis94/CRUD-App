import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Routes/Home/Home'
import AddUser from './Routes/AddUser/AddUser'
import Nav from './Routes/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<Home/>}/>
          <Route path='add' element={<AddUser/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
