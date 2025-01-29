import React from 'react'

const Contact = () => {
  const handleFormSubmit = (FormData) => {
    const FormInputData = Object.fromEntries(FormData.entries())
    console.log(FormInputData);
    
  }
  return (
    <section className='mb-16 max-w-[480px] m-auto '>
      <h2 className='text-center p-0 mb-10 mt-10 text-[40px] text-[#fff] font-extrabold '>Contact Us</h2>
      <div className='grid grid-cols-1 '>

        <form action={handleFormSubmit} className='space-y-8 text-2xl font-extrabold'>
          <input className='bg-box-green w-full  bg-inherit text-[#fff]  border-2 border-solid border-transparent bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] bg-clip-padding rounded-[10px] h-20 p-4' type="text" required autoComplete='off' placeholder='Enter Your Name' name='username'/>
          <input className='bg-box-green w-full bg-inherit text-[#fff] border-2 border-solid border-transparent bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] bg-clip-padding rounded-[10px] h-20 p-4' type="text" required autoComplete='off' placeholder='Enter Your E-mail' name='username'/>
          <textarea className='bg-box-green w-full bg-inherit text-[#fff]   border-2 border-solid border-transparent bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] bg-clip-padding rounded-[10px] h-50 p-4' name="message" rows='10' placeholder='Enter Your Message' required autoComplete='off' ></textarea>
          <button className='w-full' type='submit' value="send">Send</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact