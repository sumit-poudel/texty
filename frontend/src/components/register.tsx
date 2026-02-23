import type React from 'react'
import Guest from './guest'

type Props = {
  goToLogin: () => void;
};
const Register = ({goToLogin}:Props) => {
  return (
    <>
    <form
        
        className="flex bg-white shadow-lg p-4 justify-center gap-2 items-center rounded-lg flex-col"
      >

        <input type="name" placeholder='name' />
        <input type="email" placeholder='email'/>
      </form>
   

   <Guest goToLogin={goToLogin}/>
    </>
  )
}

export default Register