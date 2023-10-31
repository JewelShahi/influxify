import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center text-center bg-heroBg'>
      <h1 className='text-[150px] text-secondary font-extrabold'>404</h1>
      <h2 className='text-[50px] font-bold'>Ooops! Page Not Found.</h2>
      <h5 className='text-[25px]'>The page you are looking for doesn't exist or another error has occured.</h5>
    </div>
  )
}

export default NotFound