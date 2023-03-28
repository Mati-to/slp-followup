
const Patient = ({ patients, setPatients }) => {

  const { patientName, parentName, phone, email, date, description } = patients;


  return (
    <div className="mx-5 my-5 mt-0 bg-white shadow-md px-5 py-7 rounded-lg">
      <p className="font-bold mb-3 text-gray-700">
        Patient Name: {''}
        <span className="font-normal normal-case">{patientName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Parent Name: {''}
        <span className="font-normal normal-case">{parentName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Phone: {''}
        <span className="font-normal normal-case">{phone}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Entry Date: {''}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Description: {''}
        <span className="font-normal normal-case">{description}</span>
      </p>


    </div>
  )
}

export default Patient