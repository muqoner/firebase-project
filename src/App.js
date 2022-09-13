import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddTodoPage from './components/AddTodoPage';
import TodoHome from './components/TodoHome';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<TodoHome/>} />
        <Route path="/addtodo" element={<AddTodoPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
