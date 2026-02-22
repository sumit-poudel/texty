import axios from 'axios'

const ID = (props) => {
   console.log(props)
    

  return (
    <>

    <div className='bg-white  flex gap-3 p-4 border-b-1 text-black'>
        <img
    src={props.profilePhoto}
    alt="profile"
    className='rounded-full object-cover w-12 h-12'
  />
        <h3 className='text-xl font-black pt-2'>{props.name}</h3>
    </div>


    </>
  )
}

export default ID