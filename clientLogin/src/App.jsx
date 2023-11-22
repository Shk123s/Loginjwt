import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Supermainpage from './pages/Supermainpage'
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route exact path='/register' element={<Register/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/' element={<Supermainpage/>}/>

  
   </Routes>
   </BrowserRouter>
  )
}

export default App
