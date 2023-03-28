import { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import PatientsList from './components/PatientsList'

function App() {

  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? [])
  const [onePatient, setOnePatient] = useState({})

  // For now i'm only using the local storage
  // In a future update i need to delete this code to use a DB
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);


  const deletePatient = id => {
    const updatedPatients = patients.filter(patient => patient.id !== id);
    setPatients(updatedPatients);
  }

  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form
          onePatient={onePatient}
          patients={patients}
          setPatients={setPatients}
        />
        <PatientsList
          patients={patients}
          setOnePatient={setOnePatient}
          deletePatient={deletePatient}
        />
      </div>

    </div>
  )
}

export default App
