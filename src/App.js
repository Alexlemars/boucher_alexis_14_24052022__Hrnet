import'./sass/main.scss'
import { Route,Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EmployeesPage from './pages/EmployeesPage';
import Header from './component/header/header';
import Error from './pages/Error-404'




function App() {
  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/employees' element={<EmployeesPage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
