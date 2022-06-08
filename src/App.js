import'./sass/main.scss'
import { Route,Routes } from 'react-router-dom';

import Loading from './component/loading/loading';
import HomePage from './pages/HomePage';
import EmployeesPage from './pages/EmployeesPage';
import Header from './component/header/header';




function App() {
  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/employees' element={<EmployeesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
