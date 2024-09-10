import React from 'react'
import { Route,Routes } from 'react-router-dom'
import PatientLayout from '../layout/PatientLayout'

const PatientRoutes:React.FC=()=> {

  return (
    <Routes>
        <Route path='/' element={<PatientLayout/>}>

        </Route>
    </Routes>
  )
}

export default PatientRoutes