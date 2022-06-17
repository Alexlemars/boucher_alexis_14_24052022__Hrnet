import'./sass/main.scss'
import { Route,Routes } from 'react-router-dom';
import React,{lazy,Suspense} from 'react';

import Loading from './component/loading/loading';

const HomePage = lazy(()=> import('./pages/HomePage'));
const EmployeesPage = lazy(()=> import('./pages/EmployeesPage'));
const Header = lazy(()=> import('./component/header/header'));
const Error = lazy(()=> import('./pages/Error-404'));


function App() {
  return (
    <div className="App" >
      <Header/>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/employees' element={<EmployeesPage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
