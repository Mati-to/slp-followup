import { useState, useEffect } from 'react'
import keygen from 'keygenerator'
import Error from './Error'


const Form = ({ patients, setPatients, onePatient }) => {
  const [patientName, setPatientName] = useState('')
  const [parentName, setParentName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [files, setFiles] = useState([])
  const [description, setDescription] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(onePatient).length > 0) {
      setPatientName(onePatient.patientName)
      setParentName(onePatient.parentName)
      setPhone(onePatient.phone)
      setEmail(onePatient.email)
      setDate(onePatient.date)
      setFiles([])
      setDescription(onePatient.description)
    }
  }, [onePatient])

  const idKeygen = () => {
    return keygen._();
  }

  // We store the users files in the `files` property
  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(newFiles)
    console.log(e.target.files)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Data validation
    if ([patientName, parentName, phone || email, date, description].includes('')) {
      setError(true)
      return;
    }
    setError(false)

    // We store the files in 'FileList', later we can send them to the server
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file)
    });

    const userObject = {
      patientName,
      parentName,
      phone,
      email,
      date,
      description
    }

    if (onePatient.id) {
      userObject.id = onePatient.id

      const updatedPatients = patients.map(statePatient =>
        statePatient.id === onePatient.id ? userObject : statePatient)

      setPatients(updatedPatients)
    } else {
      userObject.id = idKeygen();
      setPatients([...patients, userObject])
    }

    // Empty the form data
    setPatientName('')
    setParentName('')
    setPhone('')
    setEmail('')
    setDate('')
    setFiles([])
    setDescription('')
  }


  return (



    <div className='lg:w-1/2 xl:2/5'>
      <h4 className="mb-6 text-center font-medium leading-none tracking-tight text-gray-900 text-2xl">
        <span className="text-purple-600 italic font-bold">Add</span> Patients to your list </h4>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-md pt-7 pb-4 px-5 mx-5 mb-10'>

        {error && <Error>
          <p><span>Error!</span> You need to fill the required entries </p>
        </Error>}

        <div className='grid gap-3 mb-3 md:grid-cols-2'>
          <div className='mb-1'>
            <label
              className='block text-gray-900 font-bold'
              htmlFor="patientName"> Patient's Name </label>
            <input
              value={patientName}
              onChange={e => setPatientName(e.target.value)}
              id='patientName'
              className='border-2 w-full p-1 mt-1 placeholder-gray-400 rounded-md'
              type="text"
              placeholder='Patient Name' />
          </div>
          <div className='mb-1'>
            <label
              className='block text-gray-900 font-bold'
              htmlFor="parentName"> Parent's Name </label>
            <input
              value={parentName}
              onChange={e => setParentName(e.target.value)}
              id='parentName'
              className='border-2 w-full p-1 mt-1 placeholder-gray-400 rounded-md'
              type="text"
              placeholder='Parent Name' />
          </div>
          <div className='mb-1'>
            <label
              className='block text-gray-900 font-bold'
              htmlFor="contactInfo"> *Phone Number </label>
            <input
              value={phone}
              onChange={e => setPhone(e.target.value)}
              id='contactInfo'
              className='border-2 w-full p-1 mt-1 placeholder-gray-400 rounded-md appearance-none'
              type="number"
              placeholder='679-43-' />
          </div>
          <div>
            <label
              className="block text-gray-900 font-bold"
              htmlFor="email" >Email </label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="border-2 w-full p-1 mt-1 placeholder-gray-400 rounded-md"
              id="email"
              type="email"
              placeholder="Email" />
          </div>
        </div>
        <div className='mb-3'>
          <label
            className="block text-gray-900 font-bold"
            htmlFor="date" >Entry date</label>
          <input
            value={date}
            onChange={e => setDate(e.target.value)}
            className="border-2 w-full md:w-1/2 p-1 mt-1 placeholder-gray-400 rounded-md"
            id="date"
            type="date" />
        </div>
        <div className='mb-3'>
          <label
            className="block text-gray-900 font-bold"
            htmlFor="multiple_files">*Upload multiple files</label>
          <input
            onChange={handleFileChange}
            className="block w-full text-md text-gray-900 border-2 rounded-md cursor-pointer"
            id="multiple_files"
            type="file" multiple />
        </div>
        <div className='mb-3'>
          <label
            className="block text-gray-900 font-bold"
            htmlFor="date" >Add Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className='border-2 w-full p-1 mt-1 placeholder-gray-400 rounded-md'
            name="description"
            id="description"
            cols="30" rows="5" />
        </div>

        <button
          className="text-white bg-purple-600 hover:bg-purple-800 font-medium rounded-md text-md w-full
           sm:w-auto px-5 py-2 text-center"
          type="submit">{onePatient.id ? 'Edit Patient' : 'Add Patient'}</button>

        <p className='text-sm font-thin text-gray-500 mt-5'>* Must have phone or email, or both.
          Uploading files is optional
        </p>
      </form>
    </div>
  )
}

export default Form