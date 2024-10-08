import React from 'react'
import PatientHeader from '../components/headers/PatientHeader'
import { Outlet } from 'react-router-dom'
const PatientLayout:React.FC=() =>{
  return (
    <div>
        <PatientHeader/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default PatientLayout