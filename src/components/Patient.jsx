import Buttons from './Buttons';

const Patient = ({ onePatient, setOnePatient, deletePatient }) => {

  const { patientName, parentName, phone, email, date, description, id } = onePatient;


  return (
    <div className="mx-5 my-5 mt-0 bg-white shadow-md px-5 py-7 rounded-lg">
      <div className='grid gap-1 mb-1 md:grid-cols-2'>
        <p className="font-bold mb-1 text-gray-700">
          Patient Name: {''}
          <span className="font-normal normal-case">{patientName}</span>
        </p>
        <p className="font-bold mb-1 text-gray-700">
          Parent Name: {''}
          <span className="font-normal normal-case">{parentName}</span>
        </p>
        <p className="font-bold mb-1 text-gray-700">
          Phone: {''}
          <span className="font-normal normal-case">{phone}</span>
        </p>
        <p className="font-bold mb-1 text-gray-700">
          Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
      </div>
      <p className="font-bold mb-2 text-gray-700">
        Entry Date: {''}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Description: {''}
        <span className="font-normal normal-case">{description}</span>
      </p>

      <Buttons
        id={id}
        onePatient={onePatient}
        setOnePatient={setOnePatient}
        deletePatient={deletePatient}
      />

    </div>
  )
}

export default Patient