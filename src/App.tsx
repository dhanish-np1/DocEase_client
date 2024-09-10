import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import PatientRoutes from './routes/PatientRoutes';
import AuthRoutes from './routes/AuthRoutes';
const  App:React.FC=()=> {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PatientRoutes/>}/>
        <Route path='users/*' element={<PatientRoutes/>}/>
        <Route path='auth/*' element={<AuthRoutes/>}/>
      </Routes>
    </Router>
  )
}

export default App