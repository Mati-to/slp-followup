
const Buttons = ({ onePatient, setOnePatient, deletePatient, id }) => {

  const handleDelete = () => {
    const res = confirm('Are you sure you want to delete this patient?');

    if (res) {
      deletePatient(id);
    }
  }


  return (
    <div className="mt-6 flex justify-end md:max-lg:justify-evenly space-x-5">
      <button
        type="button"
        className="w-32 py-1.5 text-sm bg-purple-600 hover:bg-purple-800 text-white font-bold rounded-lg"
        onClick={() => setOnePatient(onePatient)}>
        Edit
      </button>
      <button
        type="button"
        className="w-32 text-sm bg-red-600 hover:bg-red-800 text-white font-bold rounded-lg"
        onClick={() => handleDelete()}>
        Delete
      </button>
    </div>
  )
}

export default Buttons