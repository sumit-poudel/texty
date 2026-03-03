import type React from "react";
const NavItem=({text})=>(
  
    <p className='cursor-pointer font-sans text-black text-xs px-2 pt-1.5'>{text}</p>
    
)
const Button = ({text}) => {
  return (
    <button className="bg-[#1c1001] border-2 text-xs sm:text-xs sm:px-4 sm:py-2  md:text-sm px-3 py-1.5  text-white rounded-2xl cursor-pointer shadow-md hover:shadow-gray-400 transition">
      {text}
    </button>
  );
};
// md:gap-5 lg:gap-15 

type Props = {
  goToLogin: () => void;
  setShowModal: (arg: boolean) => void;
};
const Front = ({goToLogin,setShowModal}:Props) => {
  return (
    <>
    <div className='bg-[#E7E0D5] min-h-screen flex justify-center items-center pb-23'>
        <div className=' mx-auto w-[90vw] 
         sm:w-[85vw] 
          md:w-[75vw] 
        lg:w-[69vw]
        min-h-[70vh]
         max-w-4xl
        min-w-xs
    border-[#1c1001] border-13 rounded-4xl shadow-md  '>



    <nav className='flex flex-col items-start sm:flex-row  sm:justify-between sm:items-center md:justify-center  md:gap-5  lg:justify-between lg:gap-8  p-4'>
        <div className=' flex flex-col sm:flex-row justify-center sm:gap-2 p-4 md:gap-1 lg:gap-6 lg:p-5'>
            <button className='border-black border-2 text-xs p-1 text-black rounded-2xl cursor-pointer shadow-md hover:shadow-gray-400'>Individual</button>
            <NavItem text="Business"/>
        </div>
        <div className='flex flex-col sm:flex-row justify-center sm:gap-1 p-4  md:gap-1  lg:gap-5 lg:p-4 '>
           <NavItem text="Features" />
           <NavItem text="Privacy"/>
           <NavItem text="Help center"/>
        </div>
        <div className='flex flex-col pt-4 sm:p-4  md:flex-row justify-center sm:gap-1 p-3 md:gap-2 lg:gap-6 lg:p-5'>
            <NavItem text="Web"/>
             <Button text="Download" />
              </div>
    </nav>

    <div className='px-4 sm:px-6 md:px-10'>

    <h1 className=' text-black underline text-xl sm:text-2xl md:text-3xl lg:4xl px-1.5 font-serif'>Designed for <br />
        Productivity in <br />
         Everyday Conversations</h1>
            <br />
         <h3 className='text-black font-mono text-lg sm:text-base md:text-lg'>Stay Connected, Stay Texty.</h3>


        <div className=' gap-4 mt-4'>
         <Button text="GetStarted" />
         <button className='border-black border text-black text-xs mx-3 p-1 '>Try chat for use <select ></select> </button>
         </div>
          <button className="mx-auto" onClick={goToLogin}>
            continue as guest
          </button>
        </div>


  </div>


    </div>
    </>
  )
}

export default Front