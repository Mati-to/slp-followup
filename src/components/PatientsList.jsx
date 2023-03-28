import Patient from './Patient'

const PatientsList = ({ patients, setPatients }) => {
  return (
    <div className='md:w-1/2 lg:3/5'>
      <h4 className="mb-4 text-center leading-none tracking-tight text-gray-900 text-2xl">
        <span className="text-purple-600 italic">Organize </span> {`your Patient's list`}
      </h4>


      <div className='md:h-screen md:overflow-y-scroll'>

        {patients.map(patients => {
          return (
            <Patient
              patients={patients}
              setPatients={setPatients}
            />
          )

        })}

      </div>
    </div>


  )
}

export default PatientsList