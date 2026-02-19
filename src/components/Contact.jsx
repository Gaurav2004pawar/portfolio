import React from 'react'

const Contact = () => {
  return (
    <>
    <div name="Contact" className='max-w-screen-2xl mx-auto container md:px-20 my-20 p-1 rounded-full cursor-pointe '>
      <div className='flex flex-col text-center justify-center'>
      
      <h1 className='text-green-500 text-2xl font-semibold mb-3'>
        Experience
      </h1>

      <span className='underline font-semibold'> I` am Experience bulding project using technology</span>
    <form
  action="https://getform.io/f/p8byw4yudzo"
  method="POST"
  className="mt-6 space-y-4"
>

  

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="border p-2 w-full"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="border p-2 w-full"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    required
    className="border p-2 w-full"
  ></textarea>

  <button
    type="submit"
    className="bg-green-500 text-white px-4 py-2 rounded"
  >
    Send Message
  </button>

</form>

</div>
</div>
      
    </>
  )
}

export default Contact
