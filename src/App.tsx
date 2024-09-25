import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes';
import AuthRoutes from './routes/AuthRoutes';
import LandingPage from './features/users/LandingPage';


const  App:React.FC=()=> {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<LandingPage/>}/>
        <Route path='users/*' element={<UserRoutes/>}/>
        <Route path='auth/*' element={<AuthRoutes/>}/>
      </Routes>
    </Router>
  )
}

export default App