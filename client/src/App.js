import './App.css';
import { Home } from './Componenet/Home';
import Login from './Componenet/Login';
import Register from './Componenet/Register';
import { Route, Routes } from 'react-router-dom';
import TodoForm from './Componenet/TodoForm';
import Todo from './Componenet/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='Register' element={<Register/>}/>
      <Route exact path='login' element={<Login/>}/>
      <Route exact path='TodoForm' element={<TodoForm/>}/>
      <Route exact path='Todo' element={<Todo/>}/>



      <Route exact path='/' element={<Home/>}/>


      </Routes>

      
    </div>
  );
}

export default App;
