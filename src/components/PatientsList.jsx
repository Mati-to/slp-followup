import Patient from './Patient'

const PatientsList = ({ patients, setOnePatient, deletePatient }) => {
  return (


    <div className='md:w-1/2 lg:3/5'>

      {patients.length > 0 ? (
        <>
          <h4 className="mb-6 text-center font-medium leading-none tracking-tight text-gray-900 text-2xl">
            <span className="text-purple-600 italic font-bold">Organize </span> your Patient's list
          </h4>

          <div className='md:h-screen overflow-auto' >
            {patients.map(onePatient => {
              return (
                <Patient
                  key={onePatient.id}
                  onePatient={onePatient}
                  setOnePatient={setOnePatient}
                  deletePatient={deletePatient}
                />
              )
            })}
          </div>
        </>
      ) : (
        <h4 className="mb-6 text-center font-medium leading-none tracking-tight text-gray-900 text-2xl">
          No Patient's <span className="text-purple-600 italic font-bold">yet</span>, add one
        </h4>
      )}

    </div>
  )
}

export default PatientsList